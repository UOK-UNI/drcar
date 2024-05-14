export default function Header() {
  return (
    <header className="bg-black-1 border-b border-black-2 backdrop-blur	 fixed top-0 left-0 right-0 z-[100]">
      <div className="py-4 px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-3">
              <a
                href="tel:+989122875906"
                className="relative text-xl py-2 px-4 overflow-hidden number-clip before:bg-primary-1 before:inset-0 before:absolute before:-z-0 before:cli"
              >
                <span data-text="09122875906">09122875906</span>
              </a>
            </div>

            <div className="col-span-6 hidden md:block">
              <nav>
                <ul className="flex gap-10 text-lg">
                  <li>خانه</li>
                  <li>خدمات</li>
                  <li>تماس با ما</li>
                </ul>
              </nav>
            </div>
            <div className="col-span-9 mr-auto md:col-span-3">
              <a>
                <img
                  className="w-10 h-10"
                  src="https://2image.s3.ir-thr-at1.arvanstorage.ir/logo.jpg?versionId="
                  alt="Site Logo – ProMotors – Car Service &amp; Detailing Template"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
