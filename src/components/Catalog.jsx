import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import cx from "classnames";

const chevrolet = [
  {
    id: 1,
    name: "Chevrolet Spark",
    price: 50,
    image: "./chevrolet_spark_fara.jpeg",
    description: "Oldi fara",
  },
  {
    id: 2,
    name: "Chevrolet Spark",
    price: 50,
    image: "./chevrolet_spark_orqa_fara.jpeg",
    description: "Orqa fara",
  },
  {
    id: 3,
    name: "Chevrolet Spark",
    price: 100,
    image: "./chevrolet_spark_oldi_bumper.jpeg",
    description: "Oldi bumper",
  },
];

const toyota = [
  {
    id: 1,
    name: "Toyota Corolla",
    price: 100,
    image: "./toyota_corolla_oldi_bamfer.jpg",
    description: "Oldi bamfer",
  },
  {
    id: 2,
    name: "Toyota Corolla",
    price: 50,
    image: "./toyota_corolla_oldi_fara.jpg",
    description: "Oldi fara",
  },
];

const hyundai = [
  {
    id: 1,
    name: "Hyundai Sonata 2021",
    price: 100,
    image: "./hyundai_sonata_2021_oldi_bamfer.jpg",
    description: "Oldi bamfer",
  },
  {
    id: 2,
    name: "Hyundai Sonata 2015",
    price: 40,
    image: "./hyundai_sonata_2015_oldi_fara.jpg",
    description: "Oldi fara",
  },
];

const kia = [];

export default function Catalog() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(chevrolet);
  const [selectedProduct, setSelectedProduct] = useState("chevrolet");

  useEffect(() => {
    if (selectedProduct === "chevrolet") {
      setProducts(chevrolet);
    } else if (selectedProduct === "toyota") {
      setProducts(toyota);
    } else if (selectedProduct === "hyundai") {
      setProducts(hyundai);
    } else if (selectedProduct === "kia") {
      setProducts(kia);
    }
  }, [selectedProduct]);

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel
              transition
              className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95"
            >
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"></div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div id="catalog" className="bg-white py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kataloglar
            </p>
          </div>
          <div className="seperating_line" />

          <div className="mx-auto mt-2 sm:mt-4 lg:mt-6 max-w-2xl lg:max-w-7xl">
            <div className="mx-auto flex items-center justify-center px-4 w-full overflow-y-auto text-md font-semibold leading-6 gap-4">
              <button
                className={cx(
                  "inline-flex items-center px-2 mt-4 hover:text-[#38bdf8]",
                  {
                    "text-[#38bdf8] border-b-2 border-[#38bdf8]":
                      selectedProduct === "chevrolet",
                  },
                )}
                onClick={() => setSelectedProduct("chevrolet")}
              >
                Chevrolet
              </button>
              <button
                className={cx(
                  "inline-flex items-center px-2 mt-4 hover:text-[#38bdf8]",
                  {
                    "text-[#38bdf8] border-b-2 border-[#38bdf8]":
                      selectedProduct === "toyota",
                  },
                )}
                onClick={() => setSelectedProduct("toyota")}
              >
                Toyota
              </button>
              <button
                className={cx(
                  "inline-flex items-center px-2 mt-4 hover:text-[#38bdf8]",
                  {
                    "text-[#38bdf8] border-b-2 border-[#38bdf8]":
                      selectedProduct === "hyundai",
                  },
                )}
                onClick={() => setSelectedProduct("hyundai")}
              >
                Hyundai
              </button>
              <button
                className={cx(
                  "inline-flex items-center px-2 mt-4 hover:text-[#38bdf8]",
                  {
                    "text-[#38bdf8] border-b-2 border-[#38bdf8]":
                      selectedProduct === "kia",
                  },
                )}
                onClick={() => setSelectedProduct("kia")}
              >
                Kia
              </button>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="relative flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-square object-cover rounded-lg shadow-lg"
                      />
                      <div className="mt-4 text-center">
                        <p className="text-lg font-semibold text-gray-900">
                          {product.name}
                        </p>

                        <p className="mt-2 text-sm font-normal text-gray-500">
                          {product?.description}
                        </p>

                        <p className="mt-2 text-lg font-semibold text-gray-900">
                          {product.price} $
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-56 text-center">
                  <p className="text-lg font-semibold text-gray-900">
                    No products found
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
