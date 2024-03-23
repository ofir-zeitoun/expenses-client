import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { UserPicture } from "../../../../shared/user-picture";
import "./notification-Invitation.css";

interface InvitationNotificationProps {
  avatarSrc: string;
  listName: string;
  responses: { accepted: boolean }[];
}

export function NotificationInvitation({
  avatarSrc,
  listName,
  responses,
}: InvitationNotificationProps) {
  return (
    <div className="notification-invitation">
      <UserPicture creatorImageUrl={avatarSrc} />
      <div className="notification-content">
        <p className="notification-description">
          Invited you to join <strong>{listName}</strong>
        </p>
        <div className="notification-invitee-avatars">
          {responses.map((response, index) =>
            response.accepted ? (
              <CloseOutlined key={index} className="cancel-icon" />
            ) : (
              <CheckOutlined key={index} className="accept-icon" />
            )
          )}
        </div>
      </div>
    </div>
  );
}
