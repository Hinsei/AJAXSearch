class CreateLocation < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :city
    end
  end
end
