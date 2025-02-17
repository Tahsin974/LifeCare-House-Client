import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Overview from "../Overview/Overview";
import Location from "../Location/Location";
import Review from "../Review/Review";
import BusinessHours from "../BusinessHours/BusinessHours";

const SummaryTab = ({ categories, doctor }) => {
  return (
    // create tabs using @headlessui/react
    <div className="flex  justify-start  p-4">
      <div className="w-full ">
        <TabGroup>
          <TabList className="flex lg:flex-row md:flex-row  flex-col gap-4 border-b p-4 justify-center">
            {categories.map((category, index) => (
              <Tab
                key={index}
                className="rounded btn bg-white hover:bg-white px-10  font-semibold text-black focus:outline-none data-[selected]:bg-orange-600  data-[selected]:data-[hover]:text-white data-[selected]:text-white  data-[selected]:data-[hover]:bg-orange-600 data-[focus]:outline-1 data-[focus]:border-orange-600 data-[selected]:data-[hover]:border-orange-600"
              >
                {category}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            <TabPanel>
              {" "}
              <Overview doctor={doctor} />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <Location doctor={doctor} />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <Review doctor={doctor} />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <BusinessHours doctor={doctor} />{" "}
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default SummaryTab;
