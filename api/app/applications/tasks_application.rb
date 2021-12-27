class TasksApplication
    attr_accessor :tasks_repository
    def initialize(tasks_repository)
        @tasks_repository = tasks_repository
    end

    def index
        return tasks_repository.index
    end

    def create(name, description)
        return tasks_repository.create(name, description)
    end

    def destroy(id)
        tasks_repository.destroy(id)
    end

    def update(id, name, description)
        return tasks_repository.update(id, name, description)
    end
end