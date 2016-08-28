class ArtistsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_artist, except: [:create, :index, :search_artist]

  def index
  end

  def create
    @artist = current_user.artists.build(artist_params)
    if @artist.save!
      render json: {is_success: true}
    else
      render json: {is_success: false}
    end
  end

  def show

  end

  def edit
  end

  def update
  end

  def search_artist
    artist = RSpotify::Artist.search(params[:artist])
    render json: artist
  end

  private
    def set_artist
      @artist = Artist.find(params[:id])
    end

    def artist_params
      paramas.require(:artist).permit(:name, :spotify_url, :type, :artist_picture)
    end
end
