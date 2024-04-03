import { Alert, Spin } from "antd";
import { UseBaseQueryResult } from "@tanstack/react-query";
import { Children, ReactElement, ReactNode } from "react";
import "./suspense-component.css";

interface Props {
  isLoading: UseBaseQueryResult["isLoading"];
  error: UseBaseQueryResult["error"];
}

const isReactElement = (element: ReactNode): element is ReactElement =>
  element !== null && typeof element === "object" && "type" in element;

export const SuspenseComponent = ({
  isLoading,
  error,
  children,
}: React.PropsWithChildren<Props>) => {
  
  const initialValue = {
    loading: <Spin size="large" />,
    err: <Alert type="error" />,
    rest: [] as ReactNode[],
  };

  const elements = Children.toArray(children).reduce((acc, child) => {
    if (isReactElement(child)) {
      if (child.type === LoadingComponent) {
        acc.loading = child;
        return acc;
      }
      if (child.type === ErrorComponent) {
        acc.err = child;
        return acc;
      }
    }
    acc.rest.push(child);
    return acc;
  }, initialValue);

  const { loading, err, rest } = elements;

  if (isLoading) {
    return loading;
  }

  if (error) {
    return err;
  }

  return rest;
};

export const LoadingComponent = ({ children }: React.PropsWithChildren) => {
  return children;
};
export const ErrorComponent = ({ children }: React.PropsWithChildren) => {
  return children;
};
SuspenseComponent.Loading = LoadingComponent;
SuspenseComponent.Error = ErrorComponent;
