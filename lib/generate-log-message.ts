import { ACTION, AuditLog } from '@prisma/client';

export const generateLogMessage = (log: AuditLog) => {
    const { action, entityTitle, entityType} = log; 

    switch (action ) {
        case ACTION.CREATE:
        return ` Created ${entityType.toLocaleLowerCase()} ${entityTitle}`;
        case ACTION.UPDATE:
        return ` Updated ${entityType.toLocaleLowerCase()} ${entityTitle}`;
        case ACTION.DELETE:
        return ` Deleted ${entityType.toLocaleLowerCase()} ${entityTitle}`;
        default:
        return ` Unknown action ${entityType.toLocaleLowerCase()} ${entityTitle}`;
    }
}