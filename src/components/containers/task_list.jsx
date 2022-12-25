import React from 'react';
import { LEVELS, levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

const defaultTask = new Task('Example', 'Default description', false, LEVELS.NOROMAL);

const changeState = (id) => {
    console.log('TODO: Cmabiar estado de una tarea')
}

    return (
        <div>
            <div>
Your Task:
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
