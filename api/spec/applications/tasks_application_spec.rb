require 'rails_helper'

class MockTasksRepository
    def initialize
    end

    def index
        [{name: "test1"}]
    end
end


describe "TasksApplication" do
    it "index" do
        tasks_application = TasksApplication.new(MockTasksRepository.new())
        tasks = tasks_application.index
        expect(tasks).to eq [{name: "test1"}] 
    end
end