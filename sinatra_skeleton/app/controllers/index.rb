get '/' do
  if session[:game_id]
    @game_id = session[:game_id] 
    @results_url = "/results/#{@game_id}"

    erb :index
  else
    redirect '/create_game'
  end
end

get '/create_game' do
  
  erb :create_game
end

post '/create_game' do
  @game = Game.create
  @player_1 = Player.create(name: params[:player_1_name])
  @player_2 = Player.create(name: params[:player_2_name])
  @game.players << @player_1
  @game.players << @player_2
  session[:game_id] = @game.id 
  puts "*" * 50
  p @results_url
  redirect '/'  
end

get '/results/:game_id' do
  redirect "/results/#{params[:game_id]}", 307 
end

post '/results/:game_id' do
  "RESULTS"
  # erb :results
end

post '/test' do
  game = Game.where(id: session[:game_id]).pop
  
  game.winner = params[:winner]
  @winner = game.winner
  game.winner_time = params[:winner_time]
  @time = game.winner_time 

  jdata = params[:winner]

  "#{jdata}"
end

