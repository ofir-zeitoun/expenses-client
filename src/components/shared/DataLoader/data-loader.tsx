import { Children, ReactElement, ReactNode } from "react";
import { Alert, Spin } from "antd";
import { UseBaseQueryResult } from "@tanstack/react-query";

interface DataLoaderProps {
  isLoading: UseBaseQueryResult["isLoading"];
  error: UseBaseQueryResult["error"];
  children: ReactNode;
}

const isReactElement = (element: ReactNode): element is ReactElement =>
  element !== null && typeof element === "object" && "type" in element;

const LoadingComponent = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);

const ErrorComponent = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);

export const DataLoader = ({ isLoading, error, children }: DataLoaderProps) => {
  if (isLoading) {
    return (
      Children.toArray(children).find((child) => {
        if (isReactElement(child)) {
          if (child.type === LoadingComponent) {
            return true;
          }
        }
        return false;
      }) || <Spin size="large" />
    );
  }

  if (error) {
    return (
      Children.toArray(children).find((child) => {
        if (isReactElement(child)) {
          if (child.type === ErrorComponent) {
            return true;
          }
        }
        return false;
      }) || (
        <Alert
          message={typeof error === "string" ? error : "Error occurred"}
          type="error"
          showIcon
        />
      )
    );
  }

  return Children.toArray(children).filter((child) => {
    if (isReactElement(child)) {
      if (child.type === ErrorComponent || child.type === LoadingComponent)
        return false;
    }
    return true;
  });
};

DataLoader.Loading = LoadingComponent;
DataLoader.Error = ErrorComponent;
