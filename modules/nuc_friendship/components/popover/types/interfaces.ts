import type { NucFriendshipObjectInterface } from 'nucleify'

export interface UseFriendshipPopoverInterface {
  results: NucFriendshipObjectInterface[]
  acceptRequest: (senderId: number) => Promise<void>
  denyRequest: (senderId: number) => Promise<void>
  removeFriend: (friendId: number) => Promise<void>
  blockFriend: (friendId: number) => Promise<void>
  unblockFriend: (friendId: number) => Promise<void>
}
