function AddToCartFilter() {
  return (
    <>
      <section className="min-h-screen w-full top-0 fixed">
        <div className="h-full w-full bg-black/50 absolute top-0 flex justify-center">
          <div className="bg-white rounded-sm max-w-fit px-12 py-6 mt-20 h-fit">
            <h1 className="text-3xl font-light">ProductName</h1>
            <div className="mt-6 border-black/50 border p-6 rounded-md">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-8">
                  <div className="flex flex-col space-y-4 w-48">
                    <label className="">Region of testing</label>
                    <select
                      name="region"
                      id="regionSelect"
                      className="px-3 py-2 bg-transparent border-black/50 rounded-md border outline-0"
                    >
                      <option value="GLOBAL">GLOBAL</option>
                      <option value="APAC">APAC</option>
                      <option value="NAM">NAM</option>
                      <option value="SAM">SAM</option>
                      <option value="EU">EU</option>
                      <option value="SAM_EU">SAM EU</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-4 w-48">
                    <label className="">E-Sim</label>
                    <select
                      name="region"
                      id="regionSelect"
                      className="px-3 py-2 bg-transparent border-black/50 rounded-md border outline-0"
                    >
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-4 w-48">
                    <label className="">Form factors</label>
                    <select
                      name="region"
                      id="regionSelect"
                      className="px-3 py-2 bg-transparent border-black/50 rounded-md border outline-0"
                    >
                      <option value="M2">M.2</option>
                      <option value="minPIC">minPIC</option>
                      <option value="LGA">LGA</option>
                      <option value="MiniPCI">MiniPCI</option>
                    </select>
                  </div>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-6 self-end">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AddToCartFilter;
