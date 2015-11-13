class AddImageUrlToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :image_url, :string
  end
end
