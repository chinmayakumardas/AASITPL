'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Grid, GridItem } from '@/components/ui/grid';
import { Button } from '@/components/ui/button';
import Typography  from '@/components/ui/typography';
import { Avatar } from '@/components/ui/avatar';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from '@/components/ui/Timeline';
import Section  from '@/components/ui/Section';

export default function AboutUsPage() {
  
  return (
    <div className="w-full p-8 space-y-8">
      
      {/* Company Overview */}
      <Section>
        <Typography variant="h2" className="text-center mb-6">
          About Us
        </Typography>
        <Card>
          <CardHeader>
            <CardTitle>Our Company</CardTitle>
          </CardHeader>
          <CardContent>
            <Typography>
              We are a leading IT solutions provider, specializing in custom software development, digital transformation, and consulting services. Our team is dedicated to helping businesses grow and succeed by providing innovative technology solutions.
            </Typography>
          </CardContent>
        </Card>
      </Section>

      {/* Mission and Vision */}
      <Section>
        <Grid container spacing={4}>
          <GridItem xs={12} sm={6}>
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>
                  To empower businesses with cutting-edge technology and solutions that enable them to reach their full potential.
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>
                  To be the go-to technology partner for businesses looking to innovate, streamline operations, and deliver exceptional customer experiences.
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
        </Grid>
      </Section>

      {/* Team Section */}
      <Section>
        <Typography variant="h3" className="text-center mb-6">
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          <GridItem xs={12} sm={4}>
            <Card>
              <CardHeader>
                <Avatar src="team-member-1.jpg" alt="Team Member" />
                <CardTitle>John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>CEO & Founder</Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4}>
            <Card>
              <CardHeader>
                <Avatar src="team-member-2.jpg" alt="Team Member" />
                <CardTitle>Jane Smith</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>CTO</Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4}>
            <Card>
              <CardHeader>
                <Avatar src="team-member-3.jpg" alt="Team Member" />
                <CardTitle>Emily Johnson</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>Lead Developer</Typography>
              </CardContent>
            </Card>
          </GridItem>
        </Grid>
      </Section>

      {/* Core Values */}
      <Section>
        <Typography variant="h3" className="text-center mb-6">
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          <GridItem xs={12} sm={4}>
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>
                  We believe in constant innovation to stay ahead in the ever-evolving technology landscape.
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4}>
            <Card>
              <CardHeader>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>
                  We uphold honesty, transparency, and ethical behavior in everything we do.
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4}>
            <Card>
              <CardHeader>
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <Typography>
                  Our customers are at the heart of our business. We listen, understand, and deliver solutions that meet their needs.
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
        </Grid>
      </Section>

      {/* Timeline Section */}
      <Section>
        <Typography variant="h3" className="text-center mb-6">
          Our Journey
        </Typography>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator />
            <TimelineContent>
              <Typography variant="h4">Founded</Typography>
              <Typography>Our company was founded in 2015 with a vision to provide high-quality IT solutions to businesses.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator />
            <TimelineConnector />
            <TimelineContent>
              <Typography variant="h4">Expansion</Typography>
              <Typography>In 2018, we expanded our team and opened new offices in multiple locations.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator />
            <TimelineConnector />
            <TimelineContent>
              <Typography variant="h4">Global Reach</Typography>
              <Typography>In 2022, we became a globally recognized IT services provider, working with clients worldwide.</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>

      {/* Client Testimonials */}
      <Section>
        <Typography variant="h3" className="text-center mb-6">
          What Our Clients Say
        </Typography>
        <Grid container spacing={4}>
          <GridItem xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography>"Working with this team has been a game-changer for our business. Their solutions helped us streamline our operations and improve efficiency."</Typography>
                <Typography className="font-bold mt-4">John Williams</Typography>
                <Typography>CEO, TechCorp</Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography>"Their expertise and commitment to quality were evident throughout the project. We couldn't have asked for a better partner."</Typography>
                <Typography className="font-bold mt-4">Sara Lee</Typography>
                <Typography>VP of Operations, Innovate Solutions</Typography>
              </CardContent>
            </Card>
          </GridItem>
        </Grid>
      </Section>

      {/* Contact Button */}
      <Section>
        <div className="flex justify-center">
          <Button variant="primary" onClick={() => window.location.href = '/contact'}>
            Get in Touch
          </Button>
        </div>
      </Section>
    </div>
  );
}
