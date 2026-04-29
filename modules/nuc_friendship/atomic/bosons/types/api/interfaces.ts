import type {
  EntityResultsType,
  LoadingRefType,
  NucFriendshipObjectInterface,
} from 'nucleify'

export interface NucFriendshipRequestsInterface {
  results: EntityResultsType<NucFriendshipObjectInterface>
  loading: LoadingRefType
  getAllFriendships: (loading?: boolean) => Promise<void>
  sendRequest: (recipientId: number) => Promise<void>
  acceptRequest: (senderId: number) => Promise<void>
  denyRequest: (senderId: number) => Promise<void>
  removeFriend: (friendId: number) => Promise<void>
  blockFriend: (friendId: number) => Promise<void>
  unblockFriend: (friendId: number) => Promise<void>
}
