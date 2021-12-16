class TasksRepository
    def initialize

    end

    def index
        return Task.all
    end

    def create(name, description)
        return Task.create(name: name, description: description)
    end

    def destroy(id)
        task = Task.find_by(id: id)
        task.destroy
        return task
    end

    def update(id, name, description)
        task = Task.find_by(id: id)
        task.name = name
        task.description = description
        task.save
        return task
    end
end