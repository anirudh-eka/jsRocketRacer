class Player < ActiveRecord::Base
  validates_uniqueness_of :name
  has_and_belongs_to_many :games


end
