class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :perishable, :extension, :receive_date, :extended_date, :ext_type, :timeframe, :storage, :exp_date, :storage_type
end
