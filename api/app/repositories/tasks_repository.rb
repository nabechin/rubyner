class TasksRepository
    def initialize

    end

    def index
        return Task.all
    end

    def create(name)
        Task.create(name: name)
    end

    def destroy(id)
        task = Task.find_by(id: id)
        task.destroy
    end

    def update(id, name)
        task = Task.find_by(id: id)
        task.name = name
        task.save
    end
end