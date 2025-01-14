import H2 from './H2';
import Input from './Input';

export default function Bin() {

    return (
        <div className="bin">
            <div>
                <button className="red">Add text</button>
            </div>
            <H2 />
            <Input />
        </div>
    );
}