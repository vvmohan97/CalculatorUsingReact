
export function Input({text,result}){

    return(
        <div className="input-wrapper">
            <div className="result">
                <h4>{text}</h4>

            </div>
            <div className="text">
                <h3>{result}</h3>
            </div>

        </div>

    );
}