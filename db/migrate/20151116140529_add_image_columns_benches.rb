class AddImageColumnsBenches < ActiveRecord::Migration
    def up
      add_attachment :benches, :image
    end

    def down
      remove_attachment :benches, :image
    end
end
