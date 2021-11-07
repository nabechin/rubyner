class TasksController < ApplicationController

    def index
        tasks_repository = TasksRepository.new
        tasks = tasks_repository.index
        render json: {tasks: tasks}
    end

    def create
        tasks_repository = TasksRepository.new
        tasks_repository.create(params[:name])
        render json: {status: "Create Success"}
    end

    def destroy
        tasks_repository = TasksRepository.new
        tasks_repository.destroy(params[:id])
        render json: { status: "Delete Success" }
    end

    def update
        tasks_repository = TasksRepository.new
        tasks_repository.update(params[:id], params[:name])
        render json: { status: "Update Successs" }
    end
end
