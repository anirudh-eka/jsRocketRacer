class CreatePlayersAndGamesAndPlayersGames < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name, unique: true
      t.timestamps
    end

    create_table :games do |t|
      t.string :winner
      t.float :winner_time
      t.timestamps
    end

    create_table :games_players do |t|
      t.references :player, :game
    end
  end
end
