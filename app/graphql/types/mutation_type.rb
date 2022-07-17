module Types
  class MutationType < Types::BaseObject
    field :create_service, mutation: Mutations::CreateService
    field :update_service, mutation: Mutations::UpdateService
    field :delete_service, mutation: Mutations::DeleteService
  end
end
