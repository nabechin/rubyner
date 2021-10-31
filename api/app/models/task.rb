class Task < ApplicationRecord
    def index
        return Task.all
    end

    def create(name)
        Task.create(name)
    end
end
