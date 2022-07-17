module Queries
  class Services < Queries::BaseQuery

    type [ObjectTypes::Service], null: false

    def resolve
      ::Service.all.order(:id)
    end
  end
end
