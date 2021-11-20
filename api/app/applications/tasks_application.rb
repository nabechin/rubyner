class TasksApplication
    attr_accessor :tasks_repository
    def initialize(tasks_repository)
        @tasks_repository = tasks_repository
    end

    def index
        return @tasks_repository.index
    end

    def create(name)
        @tasks_repository.create(name)
    end

    def destroy(id)
        @tasks_repository.destroy(id)
    end

    def update(id, name)
        @tasks_repository.update(id, name)
    end
end