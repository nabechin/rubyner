class Task < ApplicationRecord
    def index
        return Task.all
    end

    def create(name)
        Task.create(name)
    end

    def update(id, name)
        task = Task.find_by(id: id)
        task.name = name
        task.save 
    end
end
