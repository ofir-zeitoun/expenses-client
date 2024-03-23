import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { UserPicture } from "../../../../shared/user-picture";
import "./notification.css";

interface InvitationNotificationProps {
  avatarSrc: string;
  listName: string;
  responses: { accepted: boolean }[];
}

export const NotificationInvation: React.FC<InvitationNotificationProps> = ({
  avatarSrc,
  listName,
  responses,
}) => (
  <div className="notification-item">
    <UserPicture creatorImageUrl={avatarSrc} />
    <p className="notification-description">
      Invited you to join <strong>{listName}</strong>
    </p>
    <div className="notification-invitee-avatars">
      {responses.map((response, index) =>
        response.accepted ? (
          <CheckCircleOutlined key={index} style={{ color: "green" }} />
        ) : (
          <CloseCircleOutlined key={index} style={{ color: "red" }} />
        )
      )}
    </div>
  </div>
);
