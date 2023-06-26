import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


// Робота через класи  
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Dima Kolosovskyi', salary: 3100, increase: false, id: 1},
                {name: 'Ivan Luts', salary: 7350, increase: true, id: 2},
                {name: 'Ivan Seredynsyi', salary: 4800, increase: false, id: 3},
            ]
        }
        this.maxId = 4;
    }
 
    //Видалення елементу з таблиці працевників
    deleteItem = (id) => {
        this.setState(({data}) => {

            return {
                data: data.filter(item => item.id !== id)
            }
            
        })
    }

    //Додавання елементу в таблицю працевників
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    //Рендер
    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem}/>
    
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;


