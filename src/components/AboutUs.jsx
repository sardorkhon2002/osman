export default function AboutUs() {
  return (
    <div id="aboutus" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Biz haqimizda
          </p>
        </div>
        <div className="seperating_line" />
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="flex items-center">
                <img src="./logo.svg" alt="OSMAN" />
              </div>
              <div className="lg:pl-[100px] flex items-center">
                <div className="data w-full">
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut purus eget sapien egestas fermentum. Nullam nec nunc nec
                    nunc. Nullam nec nunc nec nunc. Nullam nec nunc nec nunc. Ut
                    purus eget sapien egestas fermentum. Nullam nec nunc nec
                    nunc. Nullam nec nunc nec nunc. Nullam nec nunc nec nunc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
