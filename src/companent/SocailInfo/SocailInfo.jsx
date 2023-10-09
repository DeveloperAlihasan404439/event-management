import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const SocailInfo = () => {
  return (
    <div className="w-11/12 mx-auto py-8">
      <div data-aos="zoom-out"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium text-center pb-5 text-orange-500">
          Socail Events Information
        </h1>
        <h1 className="text-lg md:text-xl font-medium text-center pb-5 text-white md:w-[50%] mx-auto">
          Social events are gatherings that bring people together for various
          purposes, fostering social interaction, and creating memorable
          experiences. These events play a vital role in building connections,
          strengthening relationships, and celebrating important moments in our
          lives.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div  data-aos="fade-down" data-aos-duration="2000">
          <Accordion defaultIndex={[0]} allowToggle>
            <AccordionItem>
              <h2 className="text-black text-xl font-medium bg-white p-3 rounded-lg shadow-xl">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Weddings - A Celebration of Love
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <div className=" text-black bg-white rounded-b-lg text-lg text-justify">
                <AccordionPanel pb={4} className=" p-4">
                  A wedding is a once-in-a-lifetime event where two souls come
                  together in love and commitment. Join us in celebrating the
                  union of [Couples Names] as they embark on this beautiful
                  journey together. Our wedding ceremony will be filled with
                  joy, laughter, and cherished moments that will be remembered
                  for years to come. From the romantic vows to the lively
                  reception, this day promises to be a magical experience for
                  all. Come and share in our happiness on [Date] at [Venue].
                </AccordionPanel>
              </div>
            </AccordionItem>

            <AccordionItem>
              <h2 className="text-black text-xl font-medium bg-white p-3 rounded-lg shadow-xl mt-4">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Birthday Parties - Let is Party!
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <div className=" text-black bg-white rounded-b-lg text-lg text-justify">
                <AccordionPanel pb={4} className=" p-4">
                  Birthdays are all about celebrating life and making memories.
                  Get ready to put on your party hat and join us for a fantastic
                  birthday bash in honor of [Name]s [Age]th birthday. There will
                  be delicious food, fun games, and plenty of laughter to go
                  around. Dont miss out on the chance to wish [Name] a year
                  filled with joy and success. Join us on [Date] at [Venue] and
                  lets make this birthday unforgettable!
                </AccordionPanel>
              </div>
            </AccordionItem>
            <AccordionItem>
              <h2 className="text-black text-xl font-medium bg-white p-3 rounded-lg shadow-xl mt-4">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Anniversaries - Fifty Years of Love
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <div className=" text-black bg-white rounded-b-lg text-lg text-justify">
                <AccordionPanel pb={4} className=" p-4">
                  Fifty years of love, laughter, and togetherness deserve a
                  grand celebration. Join us in commemorating the golden
                  anniversary of [Couples Names]. Their enduring love story is
                  an inspiration to us all, and we want to honor this milestone
                  with a memorable evening filled with music, dancing, and
                  heartfelt tributes. Mark your calendars for [Date] at [Venue],
                  as we come together to celebrate 50 years of a love that has
                  stood the test of time.
                </AccordionPanel>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div data-aos="zoom-in-down" data-aos-duration="2000">
          <div className="flex items-center h-full">
            <img
              src="https://i.ibb.co/6ZHbSzY/socail.jpg"
              alt=""
              className="rounded-lg h-full"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <Accordion defaultIndex={[0]} allowToggle>
            <AccordionItem>
              <h2 className="text-black text-xl font-medium bg-white p-3 rounded-lg shadow-xl mt-4">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Engagement Parties - A New Beginning
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <div className=" text-black bg-white rounded-b-lg text-lg text-justify">
                <AccordionPanel pb={4} className=" p-4">
                  Love is in the air as we gather to celebrate the engagement of
                  [Couples Names]. Theyve taken the exciting step of committing
                  to a lifetime together, and we couldnt be happier for them.
                  Join us for an evening of joy, well-wishes, and the promise of
                  a bright future. The engagement party will take place on
                  [Date] at [Venue], and we look forward to sharing in the
                  happiness of this special moment.
                </AccordionPanel>
              </div>
            </AccordionItem>

            <AccordionItem>
              <h2 className="text-black text-xl font-medium bg-white p-3 rounded-lg shadow-xl mt-4">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Retirement Parties - Cheers to a New Chapter
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <div className=" text-black bg-white rounded-b-lg text-lg text-justify">
                <AccordionPanel pb={4} className=" p-4">
                  After years of hard work and dedication, its time to bid
                  farewell to [Retirees Name]. Join us in celebrating their
                  well-deserved retirement and the beginning of a new chapter in
                  their life. The retirement party will be a time to reminisce
                  about their career, share funny anecdotes, and wish them a
                  relaxing and adventurous retirement. Lets raise a toast to
                  [Retirees Name] on [Date] at [Venue].
                </AccordionPanel>
              </div>
            </AccordionItem>
            <AccordionItem>
              <h2 className="text-black text-xl font-medium bg-white p-3 rounded-lg shadow-xl mt-4">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Baby Shower - Welcoming a Bundle of Joy
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <div className=" text-black bg-white rounded-b-lg text-lg text-justify">
                <AccordionPanel pb={4} className=" p-4">
                  A little one is on the way, and we cant wait to celebrate!
                  Join us for a baby shower in honor of Parents Names as they
                  prepare to welcome their precious bundle of joy. There will be
                  games, gifts, and plenty of smiles as we come together to
                  shower the growing family with love and well-wishes. Save the
                  date for [Date] at [Venue] and get ready for an adorable and
                  heartwarming event.
                </AccordionPanel>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SocailInfo;
