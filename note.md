1. If we want to set a function as a state:
    * Good Practice
    ```js
    setMyFunc( () => functionName )
    ```

    * Bad Practice - The following 2 practices will call the function upon setting
    ```js
    setMyFunc(functionName)

    // OR

    setMyFunc(functionName())
    ```

2. When a function is set as a state
    - All the variables within it will be saved as well
    - So when the state function is called, it will not refer to the latest value of the same variable
    - Instead, it will use the variable that it saves when it is set.

    ```js
    export default function App() {
        const [count, setCount] = useState(0)
        const [name, setName] = useState('Alice')
        const [myFunc, setMyFunc] = useState(null)

        function handleClick() {
            setCount(prevCount => prevCount + 1)
            setName('Bob')
            myFunc()
        }

        const showVal = function() {
            console.log('The state setter function captures these values: ')
            console.log('count: ', count)
            console.log('name: ',name)
        }

        if(myFunc === null){
            // The state function is set here: so it records count: 0 and name: Alice
            // In future, when myFunc() is called, it displayd count: 0 and name: Alice regardless of the latest state of count and name
            setMyFunc(() => showVal )
        }

        return (
            <>
            <button onClick={handleClick}>Click me</button>
            <p>{count}</p>
            <p>{name}</p>
            </>
        )
    }
    ```

3. When we want to set state by using a value returned by a function

    * Good Practice
    ```js
    const [item, setItem] = useState( () => functionName())
    //OR
    setItem( () => functionName())
    ```

    * Bad Practice - for useState
        - The function will get called every single rerendering...
    ```js
    const [item, setItem] = useState( functionName())
    ```


4. When does rerendering happens?
    - Normally:
        - When one of the state resides within the top level of a component is changed.
        - Whether the state is changed or not, it depends on `Object.is()` - Refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    
    - An exception to watchout:
        - When a value is set back to the same previous value for the first time, rerendering will take place.
        - If subsequently, the value is still set back to the same previous value, then rerendering will stop taking place.
    

5. UseEffect - resolve sequence in relation to parents
    - Parent (Main content) gets rendered
    - Child (Main content) gets rendered
    - Child (Side Effect) gets rendered
    - Parent (Side Effect) gets rendered



    

6. Use Effect, Use Memo resolve sequence
    - If there is no `dependecy`, always run
    - If `dependency = []`, run at least once
    - If `dependency = [...some content...]`, run if the content has changed (also depending on `Object.is` as discussed above...)

    - When there is dependency:
        - When it is run for the first time, the current value will get save
        - Subsequently, it will always put in the current value and if it differs from the previous value, then the content will get run

    ```js
    useEffect( ()=> {
        // Content to be run
    }, [dependency1, dependency2, dependency3...])
    ```


7. Dependencies for UseEffect, UseMemo... ***DO NOT*** need to be necessary be part of the content to run the content

8. useMemo
    - same as 6)a)
    - used to save value across rendering
    - upon mounting of the component, it will run its function and return a value to be saved into a const
    - If any of the dependencies change in the future rendering, then it will get loaded and return a new value
    - Else, the function will not run again in future rendering.
    
    

