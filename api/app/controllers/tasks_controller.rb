class TasksController < ApplicationController

    def index
        tasks_application = TasksApplication.new(TasksRepository.new())
        tasks = tasks_application.index
        render json: {tasks: tasks}
    end

    def create
        tasks_application = TasksApplication.new(TasksRepository.new())
        task = tasks_application.create(params[:name], params[:description])
        render json: {status: "Create Success", task: task}
    end

    def destroy
        tasks_application = TasksApplication.new(TasksRepository.new())
        task = tasks_application.destroy(params[:id])
        render json: { status: "Delete Success", task: task }
    end

    def update
        tasks_application = TasksApplication.new(TasksRepository.new())
        tasks_application.update(params[:id], params[:name])
        render json: { status: "Update Successs" }
    end
end
