get '/' do
  if session[:game_id]
    erb :index
  else
    redirect '/create_game'
  end
end

get '/create_game' do
  
  erb :create_game
end

post '/create_game' do
  Game.create()
  # session[:game_id] = 
  redirect '/'  
end

get '/results/:game_id' do

  erb :results
end
