
import QueryList from './QueryList';


function Global_chat_box() {
  return (

    <div classname="relatite py-20 2xl:py-40 overflow-hidden">
      <div className=' pt-0  pb-0  mt-0 mr-auto mb-0 '>
        <div className="text-center text-black">
          <h1 className="text-4xl font-bold mb-4">Welcome to Global Chat Box!</h1>
          <p className="text-lg mb-6">Ask your queries here and get them resolved by the community. Let's get started!</p>
          </div>
            <div className='border rounded-2xl bg-slate-300'>
              <QueryList></QueryList>
            </div>        
          </div>
      </div>
  );
}

export default Global_chat_box;
