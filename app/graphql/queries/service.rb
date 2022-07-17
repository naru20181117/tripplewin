module Queries
  class Service < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::Service, null: false

    def resolve(id:)
      ::Service.find(id)
    end
  end
end
