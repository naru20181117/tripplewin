class InputTypes::Service < Types::BaseInputObject
  graphql_name 'ServiceAttributes'

  argument :title, String, required: true
end
