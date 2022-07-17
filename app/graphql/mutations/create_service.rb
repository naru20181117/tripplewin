module Mutations
  class CreateService < Mutations::BaseMutation
    argument :params, InputTypes::Service, required: true

    field :service, ObjectTypes::Service, null: false

    def resolve(params:)
      service = Service.create!(params.to_h)

      { service: service }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
