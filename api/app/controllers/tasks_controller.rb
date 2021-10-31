class TasksController < ApplicationController
    def index
        task = Task.new()
        # メソッド呼び出しに::が使える
        @tasks = task::index
        render json: {tasks: @tasks}
    end
    def create
        task = Task.new()
        task::create(name: params[:name])
        render json: {status: "Create Success"}
    end
end
