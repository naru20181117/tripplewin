module Mutations
  class UpdateService < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :params, InputTypes::Service, required: true

    field :service, ObjectTypes::Service, null: false

    def resolve(id:, params:)
      service = Service.find(id)
      service.update!(params.to_h)

      { service: service }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
