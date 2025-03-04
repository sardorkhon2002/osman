import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import cx from "classnames";

export const navigation = [
  { name: "Asosiy sahifa", destination: "home" },
  { name: "Kataloglar", destination: "catalog" },
  { name: "Biz haqimizda", destination: "aboutus" },
  { name: "Kontactlar", destination: "contacts" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          {
            "!bg-white shadow-md": scrolled,
          },
        )}
      >
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <img src="./logo.svg" alt="OSMAN" width="96px" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  const element = document.getElementById(item.destination);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-md font-semibold leading-6 text-gray-900 hover:text-[#38bdf8]"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end text-lg font-medium leading-6 text-gray-900">
            <span>+998 71 xxx xx xx</span>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="osman" src="./logo.svg" width="96px" />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => {
                        const element = document.getElementById(
                          item.destination,
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6 -mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  +998 71 xxx xx xx
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div id="home" className="relative h-svh isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to OSMAN
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              purus eget sapien egestas fermentum. Nullam nec nunc nec nunc.
              Nullam nec nunc nec nunc.
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
