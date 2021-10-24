class TasksController < ApplicationController
    def index
        @tasks = Task.all
        render json: {tasks: @tasks}
    end
    def create
        p params[:name]
        render json: {status: "Create Success"}
    end
end
