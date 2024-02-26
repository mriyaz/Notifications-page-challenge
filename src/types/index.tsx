export interface Notification {
    id: number,
    senderImg:string,
    sender: string,
    reaction: string,
    reactionTo?:string,
    message?: string,
    timestamp: string,
    isUnread: boolean,
    userImg?:string
}