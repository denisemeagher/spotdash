class AddSpotifyUrlTypeArtistPictureToArtist < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :spotify_url, :string
    add_column :artists, :type, :string
    add_column :artists, :artist_picture, :string
  end
end
