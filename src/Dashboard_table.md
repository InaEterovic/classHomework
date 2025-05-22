| `isLoggedIn` | `isBanned` | `isAdmin` | `hasUnreadMessages` | Message Output                            |
| ------------ | ---------- | --------- | ------------------- | ----------------------------------------- |
| `false`      | `false`    | `false`   | `false`             | Please log in to continue.                |
| `false`      | `false`    | `false`   | `true`              | Please log in to continue.                |
| `false`      | `false`    | `true`    | `false`             | Please log in to continue.                |
| `false`      | `false`    | `true`    | `true`              | Please log in to continue.                |
| `false`      | `true`     | `false`   | `false`             | Please log in to continue.                |
| `false`      | `true`     | `false`   | `true`              | Please log in to continue.                |
| `false`      | `true`     | `true`    | `false`             | Please log in to continue.                |
| `false`      | `true`     | `true`    | `true`              | Please log in to continue.                |
| `true`       | `true`     | `false`   | `false`             | Your account has been banned.             |
| `true`       | `true`     | `false`   | `true`              | Your account has been banned.             |
| `true`       | `true`     | `true`    | `false`             | Your account has been banned.             |
| `true`       | `true`     | `true`    | `true`              | Your account has been banned.             |
| `true`       | `false`    | `true`    | `true`              | Welcome, Admin. You have unread messages. |
| `true`       | `false`    | `true`    | `false`             | Welcome, Admin. No new messages.          |
| `true`       | `false`    | `false`   | `true`              | Welcome back! You have unread messages.   |
| `true`       | `false`    | `false`   | `false`             | Welcome back! No new messages.            |
