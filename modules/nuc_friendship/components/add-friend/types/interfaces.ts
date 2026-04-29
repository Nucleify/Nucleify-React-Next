import type {
  NucFriendshipRequestsInterface,
  NucUserObjectInterface,
  NucUserRequestsInterface,
} from 'nucleify'

export interface UseAddFriendInterface {
  searchEmail: string
  friendship: NucFriendshipRequestsInterface
  users: NucUserRequestsInterface
}
