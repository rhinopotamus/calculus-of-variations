var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-invention-of-calculus",
  "level": "1",
  "url": "sec-invention-of-calculus.html",
  "type": "Section",
  "number": "1.1",
  "title": "The invention of the calculus",
  "body": " The invention of the calculus  When the student of mathematics pauses to look back upon the achievements of mathematicians of the past he must be impressed with the fact that the seventeenth century was a most impor tant epoch in the development of modern mathematical analysis, since to the mathematicians of that period we owe the invention of the differential and integral calculus. At first the calculus theory, if indeed at that time it could be called such, consisted of isolated and some what crude methods of solving special problems. In the domain of what we now call the integral calculus, for example, an Italian mathematician named Cavalieri (1598-1647) devised early in the seventeenth century a summation process, called the method of indivisibles, by means of which he was able to calculate correctly many areas and volumes. His justification of his device was so incomplete logically, however, that even in those relatively uncritical times his contemporaries were doubtful and dissatisfied. Somewhat later two French mathematicians, Roberval (1602-75) and Pascal (1623-62), and the Englishman Wallis (1616-1703), improved the method and made it more like the summation processes of the integral calculus of today. In the case of the differential calculus we find that before the final quarter of the seventeenth century Descartes (1596-1650), Roberval, and Fermat (1601-65) in France, and Barrow (1630-77) in England, all had methods of constructing tangents to curves which were pointing the way toward the solution of the fundamental problem of the differential calculus as we formulate it today, namely, that of determining the slope of the tangent at a point of a curve.  At this important stage there appeared upon the scene two men of extraordinary mathematical insight, Newton (1642-1727) in England, and Leibniz (1646-1716) in Germany, who from two somewhat different standpoints carried forward the theory and applications of the calculus with great strides. It is a mistake, though we often find it an easy convenience, to regard these two great thinkers as having invented the calculus out of a clear sky. Newton was in fact a close student of the work of Wallis, and a pupil of Barrow whom he succeeded as professor of mathematics at Cambridge, while we know that Leibniz visited Paris and London early in his career and that he there became acquainted with the most advanced mathematics of his day. No one could successfully contest the fact, however, that these two men were the most able spokesmen and investigators of the seventeenth-century school of mathematicians to which we owe the gradual evolution of the calculus.  In spite of the great abilities of Newton and Leibniz the underlying principles of the calculus as exposed by them seem to us from our modern viewpoint, as indeed to their contemporaries and immediate successors, some what vague and confusing. The difficulty lies in the lack of clearness at that early time, and for more than a century thereafter, in the conceptions of infinitesimals and limits upon which the calculus rests, a difficulty which has been overcome only by the systematic study of the theory of limits inaugurated by Cauchy (1789-1857) and continued by Weierstrass (1815-97), Riemann (1826-66), and many others.  "
},
{
  "id": "sec-maxima-and-minima",
  "level": "1",
  "url": "sec-maxima-and-minima.html",
  "type": "Section",
  "number": "1.2",
  "title": "Maxima and minima",
  "body": " Maxima and minima  Among the earliest problems which attracted the attention of students of the calculus were those which require the determination of a maximum or a minimum. Fermat had devised as early as 1629 a procedure applicable to such problems, depending upon principles which in essence, though not in notation, were those of the modern differential calculus. Somewhat nearer to the type of reasoning now in common use are the methods which Newton and Leibniz applied to the determination of maxima and minima, methods which are also characteristic of their two conceptions of the fundamental principles of the differential calculus. Newton argued, in a paper written in 1671 but first published in 1736, that a variable is increasing when its rate of change is positive, and decreasing when its rate is negative, so that at a maximum or a minimum the rate must be zero. Leibniz, on the other hand, in a paper which he published in 1684, conceived the problem geometrically. At a maximum or a minimum point of a curve the tangent must be horizontal and the slope of the tangent zero.  At the present time we know well that from a purely analytical standpoint these two methods are identical. The derivative of a function represents both the rate of change of with respect to and the slope of the tangent at a point on the graph of . For in the first place the fraction in the second member of is the average rate of change of with respect to on the interval from to , and its limit as the interval is shortened is therefore rightly called the rate of change of at the initial value of the interval. In the second place this same quotient is the slope of the secant in , and its limit is the slope of the tangent at . Thus by the reasoning of either Newton or Leibnitz we know that the maxima and minima of occur at the values of where the derivative is zero.     It was not easy for the seventeenth-century mathematician to deduce this simple criterion that the derivative must vanish at a maximum or a minimum of . He was immersed in the study of special problems rather than general theories, and had no well-established limiting processes or calculus notations to assist him. It was still more difficult for him to advance one step farther to the realization of the significance of the second derivative in distinguishing between maximum and minimum values. Leibniz in his paper of 1684 was the first to give the criterion. In present-day parlance we say that are necessary conditions for the value to be a minimum, while the conditions are sufficient to insure a minimum. For a maximum the inequality signs must be changed in sense.   The words \"necessary\" and \"sufficient\" are used a lot in mathematics, though they are perhaps a little old-fashioned. The statement \" is sufficient for \" means \"if then \", or . The statement \" is necessary for \" means \"if then \", or . If is both necessary and sufficient for , then you're living in if-and-only-if land: that is, and are logically equivalent, or .  Here's an example that will help you think about this: Let's consider the relationship between squares and rectangles.   If we knew a shape was a square, we would definitely know it was a rectangle -- that is, \"the shape is a square\" is enough information to let you conclude that \"the shape is a rectangle\". So, \"square\" is sufficient for \"rectangle\".    If we knew the shape was a rectangle, we couldn't a priori be sure that it was a square, because there are rectangles that aren't squares. So, \"rectangle\" is not sufficient for \"square\".    However, if the shape wasn't a rectangle, then it definitely wouldn't be a square. Therefore, \"rectangle\" is necessary for \"square\".    But the opposite isn't true. If the shape wasn't a square, it might still be a rectangle. (It might also be a triangle or a hexagon or whatever, of course.) So \"square\" is not necessary for \"rectangle\".     Don't be worried if you have to think hard about this every time you see these words. I do too; I had to think really carefully while writing this whole remark. :)    As the book is about to say, for the problem of determining a minimum of a function, \"it will be noted that the conditions just stated as necessary for a minimum are not identical with those which are sufficient.\"   What's the difference between the necessary condition and the sufficient condition? I claim that one condition is \"stronger\" in some sense; which is it?    If the conditions are, as claimed, necessary but not sufficient for to be a minimum, then there must be some function where those conditions hold but you don't have a minimum. Give me an example of such a function.    Write a sentence or two explaining why the necessary condition isn't sufficient, and how we have to \"strengthen\" it a little to get a sufficient condition.      It will be noted that the conditions just stated as necessary for a minimum are not identical with those which are sufficient. We shall see in Chapter V that a similar undesirable and much more baffling discrepancy occurs in the calculus of variations. For the simple problem of minimizing a function the doubtful intermediate case when and are both zero was discussed by Maclaurin (1698-1746) who showed how higher derivatives may be used to obtain criteria which are both necessary and sufficient. For the calculus of variations the corresponding problem offers great difficulty and has never been completely solved.  "
},
{
  "id": "fig-1-1",
  "level": "2",
  "url": "sec-maxima-and-minima.html#fig-1-1",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "remark-necessary-sufficient",
  "level": "2",
  "url": "sec-maxima-and-minima.html#remark-necessary-sufficient",
  "type": "Remark",
  "number": "1.2.2",
  "title": "",
  "body": " The words \"necessary\" and \"sufficient\" are used a lot in mathematics, though they are perhaps a little old-fashioned. The statement \" is sufficient for \" means \"if then \", or . The statement \" is necessary for \" means \"if then \", or . If is both necessary and sufficient for , then you're living in if-and-only-if land: that is, and are logically equivalent, or .  Here's an example that will help you think about this: Let's consider the relationship between squares and rectangles.   If we knew a shape was a square, we would definitely know it was a rectangle -- that is, \"the shape is a square\" is enough information to let you conclude that \"the shape is a rectangle\". So, \"square\" is sufficient for \"rectangle\".    If we knew the shape was a rectangle, we couldn't a priori be sure that it was a square, because there are rectangles that aren't squares. So, \"rectangle\" is not sufficient for \"square\".    However, if the shape wasn't a rectangle, then it definitely wouldn't be a square. Therefore, \"rectangle\" is necessary for \"square\".    But the opposite isn't true. If the shape wasn't a square, it might still be a rectangle. (It might also be a triangle or a hexagon or whatever, of course.) So \"square\" is not necessary for \"rectangle\".     Don't be worried if you have to think hard about this every time you see these words. I do too; I had to think really carefully while writing this whole remark. :)  "
},
{
  "id": "activity-necessary-sufficient",
  "level": "2",
  "url": "sec-maxima-and-minima.html#activity-necessary-sufficient",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": " As the book is about to say, for the problem of determining a minimum of a function, \"it will be noted that the conditions just stated as necessary for a minimum are not identical with those which are sufficient.\"   What's the difference between the necessary condition and the sufficient condition? I claim that one condition is \"stronger\" in some sense; which is it?    If the conditions are, as claimed, necessary but not sufficient for to be a minimum, then there must be some function where those conditions hold but you don't have a minimum. Give me an example of such a function.    Write a sentence or two explaining why the necessary condition isn't sufficient, and how we have to \"strengthen\" it a little to get a sufficient condition.     "
},
{
  "id": "sec-two-problems",
  "level": "1",
  "url": "sec-two-problems.html",
  "type": "Section",
  "number": "1.3",
  "title": "Two problems of the calculus of variations which may be simply formulated",
  "body": " Two problems of the calculus of variations which may be simply formulated  When one realizes the difficulty with which the late seventeenth-century school of mathematicians established the first fundamental principles of the calculus and their applications to such elementary problems in maxima and minima as the one which has just been described, it is remarkable that they should have conceived or attempted to solve with their relatively crude analytical machinery the far more difficult maximum and minimum problems of the calculus of variations which were at first proposed. It is an interesting fact that these early problems were not by any means the least complicated ones of the calculus of variations, and we shall do well therefore to introduce ourselves to the subject by looking first at two others which are easier to describe to one who has not already amused himself by browsing in this domain of mathematics.  The simplest of all the problems of the calculus of variations is doubtless that of determining the shortest arc joining two given points. The co-ordinates of these points will always be denoted by and and we may designate the points themselves when convenient simply by the numerals 1 and 2. If the equation of an arc is taken in the form then the conditions that it shall pass through the two given points are and we know from the calculus that the length of the arc is given by the integral where in the evaluation of the integral is to be replaced by the derivative of the function defining the arc. There is an infinity of curves joining the points 1 and 2. The problem of finding the shortest one is equivalent analytically to that of finding in the class of functions satisfying the conditions one which makes the integral a minimum.   The value of the integral given above clearly depends on what function you choose, but will give you a unique output for any function you input. It's thus an example of a functional -- that is, a function whose inputs are functions and whose outputs are numbers. Using the notation introduced in , we might write that a functional is a function from a class of functions to the real numbers: Many authors insist on writing functionals with brackets instead of parentheses around their arguments, so you might commonly see someone write something like Broadly speaking, the calculus of variations is all about finding the maxima and\/or minima of functionals.    Where on earth did that integral come from? Let's figure it out, because it's a good example of the slice-approximate-integrate paradigm that guides a lot of the integrals we'll be writing down in this course, and this integral in particular is one that will come up a lot for us.   Draw yourself a reasonably wiggly function whose length you'd like to calculate. Label the beginning point , and label the ending point . Draw a few other points on the function at regularly-spaced intervals.    It's easy to calculate the length of a straight line, so let's slice the wiggly function into a bunch of pieces and approximate each piece by a straight line. Connect the points you drew in step 1 with straight line segments, and convince yourself that the line segments are a reasonably good wrong answer to the length of the corresponding wiggly piece.    Draw a zoomed-in picture of just one line segment. Pretend that this is the hypotenuse of a right triangle with horizontal and vertical legs. Label each leg as either or .    Use the Pythagorean theorem to calculate the length of the line segment, which we'll call     So that our expression can be the summand in a Riemann sum, we'd really like it to be of the form (stuff) . It's not in that form yet, so to get closer, multiply by . This is legit because it doesn't change the value of Explain why not.    is just a with a cheap disguise on, and multiplying by doesn't change anything at all. Multiplying by a fancy (as well as adding a fancy ) is a favorite trick of mathematicians.  A 1 with a cheap disguise on.       Factor the in the denominator into the square root, distribute, and simplify. What happens as , or, in other words, as     In the limit, becomes , so this is equivalent to .     We've sliced, we've approximated, and now it's time to integrate . We've written down an expression for the length of one slice. Take the Riemann sum of all these slices and let to obtain an expression for the actual arc length of the wiggly function. Be sure to involve and !          In the more elementary minimum problem of a function is given and a value is sought for which the corresponding value is a minimum. In the shortest-distance problem the integral takes the place of , and instead of a value making a minimum we seek to find an arc joining the points 1 and 2 which shall minimize . The analogy between the two problems is more perspicuous if we think of the length as a function whose value is uniquely determined when the arc is given, just as in the former case was a function of the variable .  There is a second problem of the calculus of variations, of a geometrical-mechanical type, which the principles of the calculus readily enable us to express also in analytic form. When a wire circle is dipped in a soap solution and withdrawn, a circular disk of soap film bounded by the circle is formed. If a second smaller circle is made to touch this disk and then moved away the two circles will be joined by a surface of film which is a surface of revolution in the particular case when the circles are parallel and have their centers on the same axis perpendicular to their planes. The form of this surface is shown in Figure 2. It is provable by the principles of mechanics, as one may readily surmise intuitively from the elastic properties of a soap film, that the surface of revolution so formed must be one of minimum area, and the problem of determining the shape of the film is equivalent therefore to that of determining such a minimum surface of revolution passing through two circles whose relative positions are supposed to be given as indicated in the figure.     In order to phrase this problem analytically let the common axis of the two circles be taken as the -axis, and let the points where the circles intersect an -plane through that axis be 1 and 2. If the meridian curve of the surface in the -plane has an equation then the calculus formula for the area of the surface is times the value of the integral Kudos to Jordan Contreras for spotting a typo in this equation; the outside the radical was missing.  The problem of determining the form of the soap film surface between the two circles is analytically that of finding in the class of arcs whose ends are at the points 1 and 2 one which minimizes the last-written integral .   Explain why the integral above is correct. I suggest a similar slice-approximate-integrate approach as we took in .   "
},
{
  "id": "remark-functional",
  "level": "2",
  "url": "sec-two-problems.html#remark-functional",
  "type": "Remark",
  "number": "1.3.1",
  "title": "",
  "body": " The value of the integral given above clearly depends on what function you choose, but will give you a unique output for any function you input. It's thus an example of a functional -- that is, a function whose inputs are functions and whose outputs are numbers. Using the notation introduced in , we might write that a functional is a function from a class of functions to the real numbers: Many authors insist on writing functionals with brackets instead of parentheses around their arguments, so you might commonly see someone write something like Broadly speaking, the calculus of variations is all about finding the maxima and\/or minima of functionals.  "
},
{
  "id": "activity-arclength",
  "level": "2",
  "url": "sec-two-problems.html#activity-arclength",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": " Where on earth did that integral come from? Let's figure it out, because it's a good example of the slice-approximate-integrate paradigm that guides a lot of the integrals we'll be writing down in this course, and this integral in particular is one that will come up a lot for us.   Draw yourself a reasonably wiggly function whose length you'd like to calculate. Label the beginning point , and label the ending point . Draw a few other points on the function at regularly-spaced intervals.    It's easy to calculate the length of a straight line, so let's slice the wiggly function into a bunch of pieces and approximate each piece by a straight line. Connect the points you drew in step 1 with straight line segments, and convince yourself that the line segments are a reasonably good wrong answer to the length of the corresponding wiggly piece.    Draw a zoomed-in picture of just one line segment. Pretend that this is the hypotenuse of a right triangle with horizontal and vertical legs. Label each leg as either or .    Use the Pythagorean theorem to calculate the length of the line segment, which we'll call     So that our expression can be the summand in a Riemann sum, we'd really like it to be of the form (stuff) . It's not in that form yet, so to get closer, multiply by . This is legit because it doesn't change the value of Explain why not.    is just a with a cheap disguise on, and multiplying by doesn't change anything at all. Multiplying by a fancy (as well as adding a fancy ) is a favorite trick of mathematicians.  A 1 with a cheap disguise on.       Factor the in the denominator into the square root, distribute, and simplify. What happens as , or, in other words, as     In the limit, becomes , so this is equivalent to .     We've sliced, we've approximated, and now it's time to integrate . We've written down an expression for the length of one slice. Take the Riemann sum of all these slices and let to obtain an expression for the actual arc length of the wiggly function. Be sure to involve and !         "
},
{
  "id": "fig-1-2",
  "level": "2",
  "url": "sec-two-problems.html#fig-1-2",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": "  "
},
{
  "id": "activity-soap-film",
  "level": "2",
  "url": "sec-two-problems.html#activity-soap-film",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": " Explain why the integral above is correct. I suggest a similar slice-approximate-integrate approach as we took in .  "
},
{
  "id": "sec-problem-newton",
  "level": "1",
  "url": "sec-problem-newton.html",
  "type": "Section",
  "number": "1.4",
  "title": "The problem of Newton",
  "body": " The problem of Newton  It was remarked above that the earliest problems of the calculus of variations were not by any means the simplest. In his Principia (1686) Newton states without proof certain conditions which must be satisfied by a surface of revolution which is so formed that it will encounter a minimum resistance when moved in the direction of its axis through a resisting medium. A particular case of the problem of finding such a surface is the well-known one of determining the form of a projectile which for a specified initial velocity will give the longest range. In practical ballistics it turns out that one of the most difficult parts of the investigation of this question lies in the experimental determination of the retardation law for bodies moving in the air at high rates of speed. Newton assumed a relatively simple law of resistance for bodies moving in a resisting medium which does not agree well with our experience with bodies moving in the air, but on the basis of which he was able to find a condition characterizing the meridian curves of the surfaces of revolution which encounter minimum resistance. From a letter written by Newton to Professor David Gregory, probably in 1694, Bolza has reconstructed in most interesting fashion the arguments which Newton used in attaining his results.  It is sufficient for the purposes of this introductory chapter to say that when the surface is generated by rotating about the -axis an arc with an equation of the form the resistance experienced by the surface when moved in the direction of the -axis will, except for a constant factor, be   Newton's problem in analytical form is then that of determining among all the arcs joining two given points 1 and 2 one which makes this integral a minimum. We could equally well of course ask to determine the curve so that the resistance should be a maximum. If the law of resistance of Newton is replaced by another the methods which we now know of attacking the problem will still be applicable, though the results may be different, as a number of writers have shown.  "
},
{
  "id": "sec-brachistochrone",
  "level": "1",
  "url": "sec-brachistochrone.html",
  "type": "Section",
  "number": "1.5",
  "title": "The brachistochrone problem",
  "body": " The brachistochrone problem  Newton's problem, published in the Principia in 1686, lay apparently unnoticed for more than a decade before a new interest aroused by a second and more famous problem of the calculus of variations caused it to be studied again. It is not surprising that this happened because Newton's description of his results is very informal and concise. He gave no hint of a larger class of similar questions, and no suggestion of a method of solution which might have been applicable to such a class. To discover the beginnings of active research in the calculus of variations we must turn therefore to other writers. In the period which followed the discovery and publication of the calculus methods of Newton and Leibnitz two of the most prominent and successful researchers in the new analysis were the Swiss mathematicians James Bernoulli (1654-1705), professor of mathematics at the University of Basle, and his brother John (1667-1748). The younger brother was a student of the elder, and among those students he was in later years by far the most distinguished on account of his varied and successful researches. He studied with James until the year 1690 when he forsook Basle for travel and the study of mathematics in France. Shortly after his return he accepted in 1695 a professorship at the University of Groningen, and in 1705, upon the death of James Bernoulli, he returned to Basle to spend the remainder of his life as professor of mathematics in his native city. In the years just preceding 1695 a rivalry sprang up between the two brothers the reason for which is not well understood. It was at times amusingly undignified, and from the scientific standpoint unjustifiable, since both brothers were with somewhat different temperaments remarkably able and worthy of respect. Whatever may have been the cause of their dissension it is at any rate true that the friction between them gave an unusual impetus and zest to the beginnings of the calculus of variations. In June, 1696, John Bernoulli proposed his now famous brachistochrone problem, and publicly incited the mathematicians of the world to give it their consideration, according to a custom which was common at the time. We know that the problem aroused great interest and that Newton, Leibniz, and l'Hospital (1661-1704), besides the brothers Bernoulli, found the correct solution.     The problem of the brachistochrone ( βραχιστος (brachistos) = shortest, χρονος (chronos) = time) is that of determining a path down which a particle will fall from one given point to another in the shortest time. Let the -axis for convenience be taken vertically downward, as in , the two fixed points being 1 and 2. The initial velocity at the point 1 is supposed to be given. In Chapter III we shall see that for a curve defined by an equation of the form the time of descent from 1 to 2 is times the value of the integral where is the gravitational constant and has the constant value . The problem of the brachistochrone is then to find among the curves which pass through two points 1 and 2 one which minimizes the integral .  The only discussions of the problem which were published in full in response to John Bernoulli's invitation were those of the Bernoulli brothers themselves, in May, 1697, and they are in many respects characteristic of their authors. John's paper is to this day most elegant and satisfactory reading. He saw that the curve of quickest descent is identical with the path of a ray of light in a medium with a suitably selected variable index of refraction, and a known property of such paths enabled him to attain very quickly and easily a solution. His method can be applied, however, to only a restricted class of similar questions. The solution of James was more laborious, and to us much less attractive, since it was couched in the language of the relatively clumsy geometrical analysis which preceded the invention of the calculus and which was commonly used for some time thereafter. But his method was a more general one than that of his younger brother and was the first step in a long series of researches which has led to the theory of the calculus of variations as we know it today.  At the close of his paper James invited mathematicians in general to consider a much more difficult problem of the calculus of variations which he had devised, and he offered to John in particular a money prize of fifty ducats for a satisfactory solution. As it turned out, however, the ducats were saved, for although John claimed to have done so he did not as a matter of fact succeed in his attacks upon the problem, and after a rather bitter discussion which dragged on for a number of years James finally published his own solution in 1701. The two papers of 1697 and 1701 of James Bernoulli were the starting-point for the researches of Euler (1707-83), a native of Basle and pupil of John Bernoulli, one of the greatest of the world's mathematicians. It is to Euler that we owe the first important result in the modern theory of the calculus of variations, as we shall see in later chapters.  It is fair to say that the theory of the calculus of variations had its beginning in the interesting brachistochrone problem of John Bernoulli. One should not infer from this remark that no problems of the calculus of variations were known earlier, for we have seen already that Newton had proposed such a problem and described a characteristic property of its solution. Furthermore the brachistochrone problem itself was more or less definitely in the mind of Galileo (1564-1642) in 1630 and 1638 when he compared the time of fall of a particle along an arc of a vertical circle with those along polygons inscribed in the arc. He seems to conclude that the time of descent on a circular arc is shorter than the times on all other paths joining its endpoints, but his proof does not justify this result. Nowadays we know that the solution curve is neither a circle nor a straight line but a cycloid, as will be proved in Chapter III. A still older problem of the calculus of variations is the isoperimetric problem of the ancient Greeks described in below. None of these, however, could rightly be regarded as the starting-point of the theory of the calculus of variations, for in the early references to them there were no indications of other problems of similar type, or of methods of solution possessing generality of application.  "
},
{
  "id": "fig-brachistochrone",
  "level": "2",
  "url": "sec-brachistochrone.html#fig-brachistochrone",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-more-general",
  "level": "1",
  "url": "sec-more-general.html",
  "type": "Section",
  "number": "1.6",
  "title": "A more general problem",
  "body": " A more general problem  With the exception of the integral in Newton's problem those which have been mentioned in the preceding sections all have the form and we might propose to ourselves to find among the curves joining two given points one which minimizes this integral . This problem also has a physical interpretation. For suppose that in a plane transparent medium the velocity of light varies from point to point, and that at an arbitrary point it has the value . The index of refraction at that point has by definition the value , where is a constant, and the time taken by a disturbance to travel along an arc of length through the point with the velocity is approximately We see readily by an integration that the integral is proportional to the time taken by a disturbance to traverse the arc joining the two given points 1 and 2. Now it has been verified physically that the path of a ray of light in a medium in which the velocity of light varies from point to point is always one on which the time-integral is, for short arcs at least, a minimum, so that our problem of minimizing is that of determining the paths of rays of light in a plane medium whose variable index of refraction is .  John Bernoulli noted that the time of descent of a particle down a curve , and the time of passage of a ray along the same curve in a medium with the index of refraction , are, except for a constant factor, given by the same integral with this index substituted. He knew furthermore that when a ray of light passes from one medium to another the sines of the angles of incidence and refraction at the bounding surface are proportional to the indices of refraction in the two media, and by thinking of his medium as made up of very thin horizontal layers with different indices he was able to deduce the form of the curve of quickest descent.  The integral still does not include that of Newton's problem as a special case, though it is general enough to so include most of the classical special problems of the calculus of variations in the plane. It will be quite as easy for us, however, to consider an integral of the form having an integrand which is an arbitrary function of the three variables , as we shall do in Chapter V. Among all the arcs joining two given points 1 and 2 we shall seek one which minimizes the integral , This is a problem of sufficient generality to include all of those hitherto stated as special cases.  "
},
{
  "id": "sec-other-problems",
  "level": "1",
  "url": "sec-other-problems.html",
  "type": "Section",
  "number": "1.7",
  "title": "Other problems of the calculus of variations",
  "body": " Other problems of the calculus of variations  It would be a mistake to infer that the category of questions to which the calculus of variations is devoted is exhausted even by the quite general problem proposed in the last section. We can vary the problem there described by seeking a minimizing curve among those joining a fixed point and a fixed curve or two fixed curves, instead of two fixed points, or in many other ways.  The famous old isoperimetric problem of the ancients was that of finding a simply closed curve of given length which incloses the largest area. The solution is a circle, though it is not any too easy to prove that this is so. Analytically the problem may be formulated as that of finding an arc with equations in the parametric form satisfying the conditions but not otherwise intersecting itself, giving the length integral a fixed value , and maximizing the area integral The fact that this integral gives the area is a consequence of Green's theorem.  The problems of the calculus of variations for which one or more integrals are to be given fixed values, while another is to be made a minimum or maximum, are called, after this one, isoperimetric problems. The problem proposed by James Bernoulli in 1697 was the earliest isoperimetric problem after that of the ancient Greeks.  It will not be possible for us in the limited space of the following pages to examine in detail more than the simpler non-isoperimetric problems, though there are many other types besides those which have already been mentioned.  The theory of the calculus of variations has been extensively developed but not so widely applied to special cases, very few of the particular problems having been exhaustively investigated. In the following Chapters II-IV three of the special problems mentioned in the preceding pages which have been studied in detail will be discussed, and in Chapter V some of the results for the more general problem formulated in Section 6 are collected, with a brief historical sketch of the progress of the theory from the time of the Bernoullis to the present.  "
},
{
  "id": "sec-shortest-arc",
  "level": "1",
  "url": "sec-shortest-arc.html",
  "type": "Section",
  "number": "2.1",
  "title": "The shortest arc joining two points",
  "body": " The shortest arc joining two points  Problems of determining shortest distances furnish a useful elementary introduction to the theory of the calculus of variations because the properties characterizing their solutions are familiar ones which illustrate very well many of the general principles common to all of the problems suggested in the preceding chapter. If we can for the moment eradicate from our minds all that we know about straight lines and shortest distances we shall have the pleasure of rediscovering well-known theorems by methods which will be helpful in solving more complicated problems.  Let us begin with the simplest case of all, the problem of determining the shortest arc joining two given points. The integral to be minimized, which we have already seen in , may be written in the form if we use the notation , and the arcs whose lengths are to be compared with each other will always be understood to be continuous and to consist of a finite number of arcs on each of which the tangent turns continuously, as indicated in .    A piecewise-differentiable arc connecting points 1 and 2.    Analytically this means that on the interval the function is continuous and that the interval can be subdivided into parts on each of which has a continuous derivative. Let us agree to call such functions admissible functions and the arcs which they define admissible arcs . Our problem is then to find among all admissible arcs joining two given points 1 and 2 one which makes the integral a minimum.   Admissible arcs, smoothness, and classes of functions  The idea of smoothness , which generalizes differentiability, is one that comes up a lot in analysis. We can categorize functions into several different differentiability classes based on how many continuous derivatives they have over some domain.   The first two classes are called and . consists of all the continuous functions, and is the class of differentiable functions whose derivative is continuous. Give an example of a function in that isn't in .    You may have noticed that in the definition of admissible functions above, we're allowing some cusps, as long as the function is mostly differentiable. This condition is more commonly referred to as being piecewise differentiable or piecewise . Give an example of a function that's not in , but is piecewise .    The very nicest functions (and, tbh, most of the ones we care about in everyday life) have infintely many derivatives. These are called smooth functions, and they belong to the class . Give three examples of functions in .      "
},
{
  "id": "fig-piecewise-smooth",
  "level": "2",
  "url": "sec-shortest-arc.html#fig-piecewise-smooth",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "  A piecewise-differentiable arc connecting points 1 and 2.   "
},
{
  "id": "sec-shortest-arc-5",
  "level": "2",
  "url": "sec-shortest-arc.html#sec-shortest-arc-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "admissible functions admissible arcs "
},
{
  "id": "activity-admissible",
  "level": "2",
  "url": "sec-shortest-arc.html#activity-admissible",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Admissible arcs, smoothness, and classes of functions.",
  "body": " Admissible arcs, smoothness, and classes of functions  The idea of smoothness , which generalizes differentiability, is one that comes up a lot in analysis. We can categorize functions into several different differentiability classes based on how many continuous derivatives they have over some domain.   The first two classes are called and . consists of all the continuous functions, and is the class of differentiable functions whose derivative is continuous. Give an example of a function in that isn't in .    You may have noticed that in the definition of admissible functions above, we're allowing some cusps, as long as the function is mostly differentiable. This condition is more commonly referred to as being piecewise differentiable or piecewise . Give an example of a function that's not in , but is piecewise .    The very nicest functions (and, tbh, most of the ones we care about in everyday life) have infintely many derivatives. These are called smooth functions, and they belong to the class . Give three examples of functions in .     "
},
{
  "id": "sec-first-necessary",
  "level": "1",
  "url": "sec-first-necessary.html",
  "type": "Section",
  "number": "2.2",
  "title": "A first necessary condition",
  "body": " A first necessary condition  Let it be granted that a particular admissible arc with the equation furnishes the solution of our problem, and let us then seek to find the properties which distinguish it from the other admissible arcs joining points 1 and 2. If we select arbitrarily an admissible function satisfying the conditions , the equation involving the arbitrary constant , represents a one-parameter family of curves which includes the arc for the special value , and all of the curves of the family pass through the end-points 1 and 2 of .   Variations and wiggles  Admissible functions like as described in are called by other authors variations -- hence, the \"calculus of variations\". Think of starting with and \"wiggling\" it by -- I'm thus going to call anything that looks like a wiggle of . That is, any member of this \"one-parameter family of curves\" is a wiggle of the original function .  We insist that so that the starting and ending points don't get wiggled away from where they're supposed to be, so that any other wiggle is some other admissible arc joining points 1 and 2. You can \"scale up\" the amount of wiggle by multiplying by some constant . Note in particular that:   For any constant , the function is just a vertical stretch of by a factor of , and is therefore itself a variation.    When , the amount of wiggle is 0, and so the wiggle is just the original function .      The value of the integral taken along an arc of the family depends upon the value of and may be represented by the symbol Along the initial arc the integral has the value , and if this is to be a minimum when compared with the values of the integral along all other admissible arcs joining 1 with 2 it must in particular be a minimum when compared with the values along the arcs of the family . Hence according to the criterion for a minimum of a function given in we must have .  It should perhaps be emphasized here that the method of the calculus of variations, as it has been developed in the past, consists essentially of three parts; first, the deduction of necessary conditions which characterize a minimizing arc; second, the proof that these conditions, or others obtained from them by slight modifications, are sufficient to insure the minimum sought; and third, the search for an arc which satisfies the sufficient conditions. For the deduction of necessary conditions the value of the integral along the minimizing arc can be compared with its values along any special admissible arcs which may be convenient for the purposes of the proof in question, for example along those of the family described above, but the sufficiency proofs must be made with respect to all admissible arcs joining the points 1 and 2. The third part of the problem, the determination of an arc satisfying the sufficient conditions, is frequently the most difficult of all, and is the part for which fewest methods of a general character are known. For shortest-distance problems fortunately this determination is usually easy.   This next result is a doozy, and it uses an important technique with which you're probably not especially familiar: differentiation under the integral sign  For more on this, see this interesting article and its references. . Here's a little activity to walk you through what's going on here.   Convince yourself that as given in is indeed a function of , and thus it's reasonable for us to compute . Also, convince yourself that is a function of both and .    Here's where \"differentiation under the integral sign\" comes in: according to something called Leibniz's rule, as long as our functions are \"nice enough\" (which they are), Apply Leibniz's rule to write down an expression for in .       We're going to need the chain rule to deal with the integrand on the RHS. In particular, it'll be helpful for us to think about the chain rule in Leibniz notation (he's just popping up all over today!): Explain why this version of the chain rule is equivalent to the usual understanding: \"first take the derivative of the outside stuff, leaving the inside stuff alone, then multiply by the derivative of the inside stuff.\"    What's something good you can label as in your expression for ? What's , and so what's ?    should be the inside stuff, . Therefore,      We mostly care about and when -- that is, when there's zero variation on the original curve . If , then what's ? Use this to rewrite your integrand .   If , then . Therefore, we can rewrite our integrand to remove the convenience variable that we kinda don't care about anyway:      Conclude by writing down a final expression for .         By differentiating the expression with respect to and then setting the value of is readily seen to be where for convenience we use the notation for the derivative of the integrand with respect to . It will always be understood that the argument in and its derivatives is the function belonging to the arc unless some other is expressly indicated, as is done, for example, in the formula .  What now are the conclusions which can be drawn from the necessity of the condition ? The answer to this question is to be found in the lemma of the following section which will be frequently applied in later chapters as well as in the solution of the shortest-distance problems to which this chapter is devoted.  "
},
{
  "id": "remark-var-wiggle",
  "level": "2",
  "url": "sec-first-necessary.html#remark-var-wiggle",
  "type": "Remark",
  "number": "2.2.1",
  "title": "Variations and wiggles.",
  "body": " Variations and wiggles  Admissible functions like as described in are called by other authors variations -- hence, the \"calculus of variations\". Think of starting with and \"wiggling\" it by -- I'm thus going to call anything that looks like a wiggle of . That is, any member of this \"one-parameter family of curves\" is a wiggle of the original function .  We insist that so that the starting and ending points don't get wiggled away from where they're supposed to be, so that any other wiggle is some other admissible arc joining points 1 and 2. You can \"scale up\" the amount of wiggle by multiplying by some constant . Note in particular that:   For any constant , the function is just a vertical stretch of by a factor of , and is therefore itself a variation.    When , the amount of wiggle is 0, and so the wiggle is just the original function .     "
},
{
  "id": "act-diff-under-int",
  "level": "2",
  "url": "sec-first-necessary.html#act-diff-under-int",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": " This next result is a doozy, and it uses an important technique with which you're probably not especially familiar: differentiation under the integral sign  For more on this, see this interesting article and its references. . Here's a little activity to walk you through what's going on here.   Convince yourself that as given in is indeed a function of , and thus it's reasonable for us to compute . Also, convince yourself that is a function of both and .    Here's where \"differentiation under the integral sign\" comes in: according to something called Leibniz's rule, as long as our functions are \"nice enough\" (which they are), Apply Leibniz's rule to write down an expression for in .       We're going to need the chain rule to deal with the integrand on the RHS. In particular, it'll be helpful for us to think about the chain rule in Leibniz notation (he's just popping up all over today!): Explain why this version of the chain rule is equivalent to the usual understanding: \"first take the derivative of the outside stuff, leaving the inside stuff alone, then multiply by the derivative of the inside stuff.\"    What's something good you can label as in your expression for ? What's , and so what's ?    should be the inside stuff, . Therefore,      We mostly care about and when -- that is, when there's zero variation on the original curve . If , then what's ? Use this to rewrite your integrand .   If , then . Therefore, we can rewrite our integrand to remove the convenience variable that we kinda don't care about anyway:      Conclude by writing down a final expression for .        "
},
{
  "id": "sec-fundamental-lemma",
  "level": "1",
  "url": "sec-fundamental-lemma.html",
  "type": "Section",
  "number": "2.3",
  "title": "A fundamental lemma",
  "body": " A fundamental lemma  In the integrand of the integral the coefficient of is really a function of , since the derivative contains as its argument the slope of the arc , and we may denote this coefficient by . It should be noted that the function is continuous except possibly at the values of defining the corners of the arc where the slope changes abruptly. At those points of the curve it has two values, one corresponding to the backward and one to the forward slope. The lemma which we wish to prove is then as follows:   The Fundamental Lemma   Let be a function of the kind described above, continuous on the interval , or else such that the interval can be subdivided into a finite number of parts on each of which is continuous. If the integral vanishes for every admissible function such that , then is necessarily a constant.     I want to restate this lemma just slightly so it's clearer what it's saying. Suppose that:    is a piecewise-differentiable function     is a variation     , no matter which variation you choose!    Then we get to conclude that is in fact a constant function.  Just for one more layer of emphasis here: IF!!!!! the three things in bullets, THEN!!!!  is constant.   Before we see the proof itself, let's build up to it by working through some of the trickier parts.   Suppose is just some constant, and remember that is supposed to be a variation in the sense of . Compute        Consider the function . As you may suspect since I used the letter , I'd really like it if was a variation. Compute .    Is there a value of (which is supposed to be a constant) such that ? (Hint: is just some area or other.)    Compute the derivative of this particular variation . (You'll need the fundamental theorem of calculus.)    Finally, and changing gears a little, think of some function . What can you tell me about ? Is it positive or negative? Can it ever be zero?     To see that this is so we note first that the vanishing of the integral of the lemma implies also the equation for every constant , since all the functions to be considered have . The particular function defined by the equation evidently has the value zero at and it will vanish again at if, as we shall suppose, is the constant value satisfying the condition The function defined by with this value of inserted is now one of those which must satisfy . Its derivative is except at points where is discontinuous, since the derivative of an integral with respect to its upper limit is the value of the integrand at that limit whenever the integrand is continuous at the limit. For the special function , therefore, takes the form and our lemma is an immediate consequence since this equation can be true only if .   We're going to deduce another form of the fundamental lemma that will come in handy. It's weird to me that in the original version of the fundamental lemma ( ), there's an instead of an . So, consider the very similar integral and suppose the same hypotheses as in the original version: is piecewise continuous, is a variation, and the value of this integral is 0 no matter which you choose.    Whenever I see something that looks like the integral of a product, I immediately start thinking about integration by parts (which is, after all, the integral version of the product rule). Choose a and a that will get you something that looks like the integral in the original version. Why are your choices good?    will produce , which definitely appears in the original version, and will produce... well, I'm not sure, because I don't exactly know what is, but let's just say that the antiderivative of is .     Now go ahead and use integration by parts. Careful: this is a definite integral . (Hint: What's and ?)       The value of your integral is supposed to be 0, by supposition. If you've chosen your parts wisely, you're in a situation where you can invoke . What can you conclude about ?   Since , implies that is a constant. Since was the antiderivative of , we can conclude that -- that is, that is the constant function 0.      "
},
{
  "id": "lemma-fundamental",
  "level": "2",
  "url": "sec-fundamental-lemma.html#lemma-fundamental",
  "type": "Lemma",
  "number": "2.3.1",
  "title": "The Fundamental Lemma.",
  "body": " The Fundamental Lemma   Let be a function of the kind described above, continuous on the interval , or else such that the interval can be subdivided into a finite number of parts on each of which is continuous. If the integral vanishes for every admissible function such that , then is necessarily a constant.   "
},
{
  "id": "remark-fun-lemma",
  "level": "2",
  "url": "sec-fundamental-lemma.html#remark-fun-lemma",
  "type": "Remark",
  "number": "2.3.2",
  "title": "",
  "body": " I want to restate this lemma just slightly so it's clearer what it's saying. Suppose that:    is a piecewise-differentiable function     is a variation     , no matter which variation you choose!    Then we get to conclude that is in fact a constant function.  Just for one more layer of emphasis here: IF!!!!! the three things in bullets, THEN!!!!  is constant.  "
},
{
  "id": "activity-fun-proof",
  "level": "2",
  "url": "sec-fundamental-lemma.html#activity-fun-proof",
  "type": "Activity",
  "number": "2.3.1",
  "title": "",
  "body": "Before we see the proof itself, let's build up to it by working through some of the trickier parts.   Suppose is just some constant, and remember that is supposed to be a variation in the sense of . Compute        Consider the function . As you may suspect since I used the letter , I'd really like it if was a variation. Compute .    Is there a value of (which is supposed to be a constant) such that ? (Hint: is just some area or other.)    Compute the derivative of this particular variation . (You'll need the fundamental theorem of calculus.)    Finally, and changing gears a little, think of some function . What can you tell me about ? Is it positive or negative? Can it ever be zero?    "
},
{
  "id": "activity-fun-lemma2",
  "level": "2",
  "url": "sec-fundamental-lemma.html#activity-fun-lemma2",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": " We're going to deduce another form of the fundamental lemma that will come in handy. It's weird to me that in the original version of the fundamental lemma ( ), there's an instead of an . So, consider the very similar integral and suppose the same hypotheses as in the original version: is piecewise continuous, is a variation, and the value of this integral is 0 no matter which you choose.    Whenever I see something that looks like the integral of a product, I immediately start thinking about integration by parts (which is, after all, the integral version of the product rule). Choose a and a that will get you something that looks like the integral in the original version. Why are your choices good?    will produce , which definitely appears in the original version, and will produce... well, I'm not sure, because I don't exactly know what is, but let's just say that the antiderivative of is .     Now go ahead and use integration by parts. Careful: this is a definite integral . (Hint: What's and ?)       The value of your integral is supposed to be 0, by supposition. If you've chosen your parts wisely, you're in a situation where you can invoke . What can you conclude about ?   Since , implies that is a constant. Since was the antiderivative of , we can conclude that -- that is, that is the constant function 0.     "
},
{
  "id": "sec-straight-line",
  "level": "1",
  "url": "sec-straight-line.html",
  "type": "Section",
  "number": "2.4",
  "title": "Proof that the straight line is shortest",
  "body": " Proof that the straight line is shortest  In the equation of the family of curves passing through the points 1 and 2 the function was entirely arbitrary except for the restrictions that it should be admissible and satisfy the relations , and we have seen that the expression for must vanish for every such family. The lemma of the preceding section is therefore applicable and it tells us that along the minimizing arc an equation Take the derivative of the arc length formula with respect to .  must hold, where is a constant. If we solve this equation for we see that is also a constant along and that the only possible minimizing arc is therefore a single straight-line segment without corners joining the point 1 with the point 2.  The property just deduced for the shortest arc has so far only been proved to be necessary for a minimum. We have not yet demonstrated conclusively that the straight-line segment joining 1 and 2 is actually shorter than every other admissible arc joining these points. In order to actually establish this fact let us now use to denote the increment which must be added to the ordinate This is an old-school word for -value. of at the value in order to get the ordinate of an arbitrarily selected admissible arc joining 1 with 2, so that the equation of will be In other words, is a wiggle of , and is the variation between and .    Okay, so the book is about to invoke some pretty deep results from Taylor series , and doesn't do much to explain them. Here's some stuff to help you figure out what's going on.   Write down the first few terms of the Taylor series expansion for a generic function centered at . What's ? What's ?    In this expansion, is some fixed value in the domain. Usually it's some \"easy point\" where we know a lot of information about and its derivatives. For instance, if our function was , some examples of \"easy points\" might be 36, 81, or 121.   , on the other hand, is some honestly variable value in the domain. Usually it's some value close to , but it's \"harder\" than . Returning to the example of the function , we might use the \"easy point\" to help us figure out the value of the function at the harder point .     Consider the difference between the lengths of and : In this expression, we have and running around. Which of these do you think might be like and which of these do you think might be like in the Taylor setup?   I think is going to be like , because it's the \"easy point\" that we already know something about, and is going to be the \"nearby point\" that's \"harder.\"     You might be familiar with the idea of the Lagrange error bound , which describes how big the error in using the th Taylor polynomial to calculate might be. There's a slightly different version of this same idea which gives a more exact value of the remainder (ie. the error): for some value between and .  We're going to use this in the case where -- that is, we're interested in the remainder after approximating with just its linear approximation. Write out the formula above in the case where .       In this formula for , substitute in what you decided for and in step 2. Simplify a little.       Now we just have to think hard about , which is supposed to be somewhere between and . In our case, that's somewhere between and . The book is about to say that , where is some number between 0 and 1. Why does this make sense?     The difference between the lengths of and can now be expressed with the help of Taylor's formula in the form where and are the values of the integral along the two arcs; is the second derivative of the function with respect to ; and is the value between 0 and 1 introduced by Taylor's formula. The next to last integral vanishes since is a constant along and since the difference of the ordinates of two arcs and with the same end-points must vanish at and . Furthermore the last integral is never negative since the second derivative is always positive. We see therefore that is greater than zero unless vanishes identically, in which case itself would have everywhere the constant value zero which it has at and , and would coincide with .   It has been proved therefore that the shortest arc from the point 1 to the point 2 is necessarily the straight-line segment joining those points, and that this segment is actually shorter than every other admissible arc with the same endpoints.    Necessary and sufficient conditions  Here's the logic of what we just did: first we showed that if we had a minimizing arc , then it was necessary for to be a straight line -- that is, \"if minimizing arc, then straight line.\"  Then we showed that if was any other admissible arc (which we can think of as some variation of ), then it was definitely longer than , unless the variation was 0. That is, we showed \"if straight line, then minimizing arc\" -- if we want to be a minimizing arc, then it is sufficient for to be a straight line.  For a little reminder about all of this \"necessary\" and \"sufficient\" business, please reference the earlier discussion in .   One should notice the rôle which the positive sign of the derivative has played in the determination of the minimum property. If the sign of this derivative had been negative the difference would have been negative and would have been a maximum instead of a minimum. This is an analogue of the criterion mentioned in for the simpler theory of maxima and minima of functions of a single variable.  "
},
{
  "id": "activity-taylor",
  "level": "2",
  "url": "sec-straight-line.html#activity-taylor",
  "type": "Activity",
  "number": "2.4.1",
  "title": "",
  "body": "Okay, so the book is about to invoke some pretty deep results from Taylor series , and doesn't do much to explain them. Here's some stuff to help you figure out what's going on.   Write down the first few terms of the Taylor series expansion for a generic function centered at . What's ? What's ?    In this expansion, is some fixed value in the domain. Usually it's some \"easy point\" where we know a lot of information about and its derivatives. For instance, if our function was , some examples of \"easy points\" might be 36, 81, or 121.   , on the other hand, is some honestly variable value in the domain. Usually it's some value close to , but it's \"harder\" than . Returning to the example of the function , we might use the \"easy point\" to help us figure out the value of the function at the harder point .     Consider the difference between the lengths of and : In this expression, we have and running around. Which of these do you think might be like and which of these do you think might be like in the Taylor setup?   I think is going to be like , because it's the \"easy point\" that we already know something about, and is going to be the \"nearby point\" that's \"harder.\"     You might be familiar with the idea of the Lagrange error bound , which describes how big the error in using the th Taylor polynomial to calculate might be. There's a slightly different version of this same idea which gives a more exact value of the remainder (ie. the error): for some value between and .  We're going to use this in the case where -- that is, we're interested in the remainder after approximating with just its linear approximation. Write out the formula above in the case where .       In this formula for , substitute in what you decided for and in step 2. Simplify a little.       Now we just have to think hard about , which is supposed to be somewhere between and . In our case, that's somewhere between and . The book is about to say that , where is some number between 0 and 1. Why does this make sense?    "
},
{
  "id": "remark-necessary-sufficient-2",
  "level": "2",
  "url": "sec-straight-line.html#remark-necessary-sufficient-2",
  "type": "Remark",
  "number": "2.4.1",
  "title": "Necessary and sufficient conditions.",
  "body": " Necessary and sufficient conditions  Here's the logic of what we just did: first we showed that if we had a minimizing arc , then it was necessary for to be a straight line -- that is, \"if minimizing arc, then straight line.\"  Then we showed that if was any other admissible arc (which we can think of as some variation of ), then it was definitely longer than , unless the variation was 0. That is, we showed \"if straight line, then minimizing arc\" -- if we want to be a minimizing arc, then it is sufficient for to be a straight line.  For a little reminder about all of this \"necessary\" and \"sufficient\" business, please reference the earlier discussion in .  "
},
{
  "id": "sec-auxiliary-formulas",
  "level": "1",
  "url": "sec-auxiliary-formulas.html",
  "type": "Section",
  "number": "2.5",
  "title": "Two important auxiliary formulas",
  "body": " Two important auxiliary formulas  The type of proof used in the preceding section to show that the straight line joining 1 with 2 is shorter than every other admissible arc joining those two points is a very special one, not applicable in general to problems of the calculus of variations whose integrals have integrands containing one or both of the variables and as well as . It will be well worth while, therefore, to consider a second form of proof which will extend somewhat the results already found for the problem of finding the shortest distance between two points, and which will be applicable not only to the problems of shortest distances considered in this chapter but also to those which we shall study later.      We shall need first of all two special cases of more general formulas which are frequently applied in succeeding pages. Let be a straight-line segment of variable length which moves so that its end-points describe simultaneously the two curves and shown in , and let the equations of these curves in parametric form be The length of the segment has the differential  When the notation is used to denote the slope of the line this result may be expressed in the more convenient formula of the following theorem:    If a straight-line segment moves so that its end-points 3 and 4 describe simultaneously two curves and , as shown in , then the length of has the differential where the vertical bar indicates that the value of the preceding expression at the point 3 is to be subtracted from its value at the point 4. In this formula the differentials at the points 3 and 4 are those belonging to and , while is the slope of the segment .    We shall need frequently to integrate the expression in the second member of along curves such as and . This is evidently justifiable along , for example, since the slope is a function of and since the differentials can be calculated in terms of and from the equations of , so that the expression takes the form of a function of multiplied by . The integral defined by the formula will also be well defined along an arbitrary curve when is a function of and , provided that we agree to calculate the value of by substituting for the expressions for these variables in terms of and obtained from the parametric equations of .  Let and be two parameter values which define points 3 and 5 on , and which at the same time define two corresponding points 4 and 6 on , as in . If we integrate the formula with respect to from to and use the notation just introduced for the integral of its second member, we find as a further result:    The difference of the lengths and of the moving segment in two positions and is given by the formula     This and the formula are the two important ones for which we have been seeking. It is evident that they will still hold in even simpler form when one of the curves or degenerates into a point, since along such a degenerate curve the differentials and are zero.  The integrand of the integral has a simple geometrical interpretation at the points of the curve along which it is taken. At the point of the curve in , for example, the angles between the -axis and the tangents to and have, respectively, the cosines and sines Since the angle between these tangents, and the element of length on , are defined by the equations it follows that the integral can also be expressed in the convenient form   "
},
{
  "id": "fig-5",
  "level": "2",
  "url": "sec-auxiliary-formulas.html#fig-5",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec-auxiliary-formulas-5",
  "level": "2",
  "url": "sec-auxiliary-formulas.html#sec-auxiliary-formulas-5",
  "type": "Theorem",
  "number": "2.5.2",
  "title": "",
  "body": "  If a straight-line segment moves so that its end-points 3 and 4 describe simultaneously two curves and , as shown in , then the length of has the differential where the vertical bar indicates that the value of the preceding expression at the point 3 is to be subtracted from its value at the point 4. In this formula the differentials at the points 3 and 4 are those belonging to and , while is the slope of the segment .   "
},
{
  "id": "sec-auxiliary-formulas-8",
  "level": "2",
  "url": "sec-auxiliary-formulas.html#sec-auxiliary-formulas-8",
  "type": "Theorem",
  "number": "2.5.3",
  "title": "",
  "body": "  The difference of the lengths and of the moving segment in two positions and is given by the formula    "
},
{
  "id": "sec-field",
  "level": "1",
  "url": "sec-field.html",
  "type": "Section",
  "number": "2.6",
  "title": "The notion of a field and a second sufficiency proof",
  "body": " The notion of a field and a second sufficiency proof  We have seen in that necessary conditions on the shortest arc may be deduced by comparing it with other admissible arcs of special types, but that a particular line can be proved to be actually the shortest only by comparing it with all of the admissible arcs joining the same two end-points. The sufficiency proof of this section is valid not only for the arcs which we have named admissible but also for arcs with equations in the parametric form We suppose always that the functions and are continuous, and that the interval can be subdivided into one or more parts on each of which and have continuous derivatives such that . The curve represented is then continuous and has a continuously turning tangent except possibly at a finite number of corners. A much larger variety of curves can be represented by such parametric equations than by an equation of the form because the parametric representation lays no restriction upon the slope of the curve or the number of points of the curve which may lie upon a single ordinate, while for an admissible arc the slope must always be finite and the number of points on each ordinate at most one.   What's going on here is we're broadening our class of admissible arcs to include not just the graphs of functions of the form , which must in particular pass the vertical line test, but also parametrically-defined curves. (You might know these as \"space curves\" or \" vector-valued functions .\") We're still going to insist that they are piecewise smooth in the sense of from earlier.  The condition that just says that the tangent vector is never zero. That is, if a point is traversing the curve according to the equations given, it never just stops along the way. This isn't much of a concession; given any graph you'd want to draw, you can always find a way to parameterize it so that the point never has to stop.   The mathematician who first made satisfactory sufficiency proofs in the calculus of variations was Weierstrass , and the ingenious device which he used in his proofs is called a field. This is definitely not the same kind of field we study in abstract algebra. For the problems which we are considering in this chapter a field is a region of the -plane with which there is associated a one-parameter family of straight-line segments all of which intersect a fixed curve , and which have the further property that through each point of there passes one and but one of the segments. The curve may be either inside the field, or outside as illustrated in , and as a special case it may degenerate into a single fixed point.   Explore this definition  Whenever you encounter a new definition in a math textbook, it's a good idea to dig in and explore. Here are some questions that will be helpful in your exploration. Not every question applies to every situation, and there are certainly other questions you might consider asking.   What are the important parts of this definition?    Can you draw a picture or diagram to help you understand this definition?    What's an example of something that satisfies this definition? What's a non-example? (The next paragraph will be helpful, but try to think of other examples besides those given in the book.)    If you're lucky enough to be reading a definition where some examples are immediately given, explore these examples. Draw pictures of the examples, and understand why they are examples. (Same deal for non-examples, if any.)      The whole plane is a field when covered by a system of parallel lines, the curve being in this case any straight line or curve which intersects all of the parallels. The plane with the exception of a single point 0 is a field when covered by the rays through 0, and 0 is a degenerate curve . The tangents to a circle do not cover a field since through each point outside of the circle there pass two tangents, and through a point inside the circle there is none. If, however, we cut off half of each tangent at its contact point with the circle, leaving only a one-parameter family of half-rays all pointing in the same direction around the circle, then the exterior of the circle is a field simply covered by the family of half-rays.  At every point of a field the straight line of the field has a slope , the function so defined being called the slope-function of the field. The integral (from equation ) with this slope-function in place of in its integrand has a definite value along every arc in the field having equations of the form , as we have seen on page 25. We can prove with the help of the formulas of the last section that the integral associated in this way with a field has the two following useful properties:      The values of are the same along all curves in the field F having the same end-points 3 and 5.    Furthermore along each segment of one of the straight lines of the field the value of is equal to the length of the segment.        To prove the first of these statements we may consider the curve shown in the field of of . Through every point of this curve there passes, by hypothesis, a straight line of the field intersecting , and the formula , applied to the one-parameter family of straight-line segments so determined by the points of , gives The values of the terms on the right are completely determined when the points 3 and 5 in the field are given, and are entirely independent of the form of the curve joining these two points. This shows that the value is the same for all arcs in the field joining the same two end-points, as stated in the theorem.  The second property of the theorem follows from the fact that along a straight-line segment of the field the differentials and satisfy the equation , and the integrand of reduces therefore to which is the integrand of the length integral.  We now have the mechanism necessary for the sufficiency proof which was the objective of this section. We wish to show that a straight-line segment joining a pair of points 1 and 2 is shorter than every other arc joining these points. For that purpose let us consider the field formed by covering the whole -plane by the lines parallel to . When is an arc joining 1 with 2 in this field and defined by equations in the parametric form the properties just deduced for the integral give   Explain to yourself, from left to right, why each of these equalities holds.  and the difference between the values of along and is therefore The equality sign can hold only if coincides with . For when the integral in the last equation is zero we must have at every point of , from which it follows that is tangent at every point to a straight line of the field and satisfies the equation . Such a differential equation can have but one solution through the initial point 1 and that solution is . We have proved therefore that the length of is always greater than that of unless is coincident with .  We may emphasize again here that the sufficiency proof just given is considerably more inclusive than that of , since it clearly shows that a straight line joining the points 1 and 2 is not only shorter than all other admissible arcs joining these points but also shorter than every other curve with the same end-points defined by equations in the parametric form .  "
},
{
  "id": "sec-field-3",
  "level": "2",
  "url": "sec-field.html#sec-field-3",
  "type": "Remark",
  "number": "2.6.1",
  "title": "",
  "body": " What's going on here is we're broadening our class of admissible arcs to include not just the graphs of functions of the form , which must in particular pass the vertical line test, but also parametrically-defined curves. (You might know these as \"space curves\" or \" vector-valued functions .\") We're still going to insist that they are piecewise smooth in the sense of from earlier.  The condition that just says that the tangent vector is never zero. That is, if a point is traversing the curve according to the equations given, it never just stops along the way. This isn't much of a concession; given any graph you'd want to draw, you can always find a way to parameterize it so that the point never has to stop.  "
},
{
  "id": "sec-field-5",
  "level": "2",
  "url": "sec-field.html#sec-field-5",
  "type": "Activity",
  "number": "2.6.1",
  "title": "Explore this definition.",
  "body": " Explore this definition  Whenever you encounter a new definition in a math textbook, it's a good idea to dig in and explore. Here are some questions that will be helpful in your exploration. Not every question applies to every situation, and there are certainly other questions you might consider asking.   What are the important parts of this definition?    Can you draw a picture or diagram to help you understand this definition?    What's an example of something that satisfies this definition? What's a non-example? (The next paragraph will be helpful, but try to think of other examples besides those given in the book.)    If you're lucky enough to be reading a definition where some examples are immediately given, explore these examples. Draw pictures of the examples, and understand why they are examples. (Same deal for non-examples, if any.)     "
},
{
  "id": "thm-i-star-field",
  "level": "2",
  "url": "sec-field.html#thm-i-star-field",
  "type": "Theorem",
  "number": "2.6.2",
  "title": "",
  "body": "     The values of are the same along all curves in the field F having the same end-points 3 and 5.    Furthermore along each segment of one of the straight lines of the field the value of is equal to the length of the segment.      "
},
{
  "id": "sec-field-11",
  "level": "2",
  "url": "sec-field.html#sec-field-11",
  "type": "Activity",
  "number": "2.6.2",
  "title": "",
  "body": "Explain to yourself, from left to right, why each of these equalities holds. "
},
{
  "id": "sec-shortest-curve",
  "level": "1",
  "url": "sec-shortest-curve.html",
  "type": "Section",
  "number": "2.7",
  "title": "The shortest arc joining a point to a curve",
  "body": " The shortest arc joining a point to a curve  "
},
{
  "id": "sec-shortest-ellipse",
  "level": "1",
  "url": "sec-shortest-ellipse.html",
  "type": "Section",
  "number": "2.8",
  "title": "The shortest arc joining a point to an ellipse",
  "body": " The shortest arc joining a point to an ellipse  "
},
{
  "id": "sec-two-curves",
  "level": "1",
  "url": "sec-two-curves.html",
  "type": "Section",
  "number": "2.9",
  "title": "The shortest arc joining two curves",
  "body": " The shortest arc joining two curves  "
},
{
  "id": "sec-brachistochrone-overview",
  "level": "1",
  "url": "sec-brachistochrone-overview.html",
  "type": "Section",
  "number": "3.1",
  "title": "The brachistochrone problem: its significance as an illustration",
  "body": " The brachistochrone problem: its significance as an illustration  The brachistochrone problem is historically the most interesting of all the special problems mentioned in Chapter I since as we have there seen it gave the first impetus to systematic research in the calculus of variations. Since the time of the Bernoulli brothers it has been used with great regularity as an illustration by writers on the subject, and it is in many respects a most excellent one. Unfortunately in the forms originally proposed by the Bernoullis it does not require the application of an important necessary condition for a minimum which was first described by Jacobi in 1837, more than a century after the calculus of variations began to be systematically studied. A special case of this condition is the restriction on the position of the center of curvature in the problem of finding the shortest arc from a point to a curve, as described in the theorem on page 33 of the last chapter. It is perhaps at first surprising that the significance of such a simple instance of the condition escaped the early students of the calculus of variations, but a study of the older memoirs soon impresses one with a realization of the serious difficulties encountered with the methods originally used. Throughout the eighteenth century, investigators in the calculus of variations for the most part desisted when they had found the forms, or in many cases the differential equations only, of the minimizing curves which they were seeking.  It is natural at first sight to suppose that a straight line is the path down which a particle will fall in the shortest time from a given point 1 to a second given point 2, because a straight line is the shortest distance between the two points, but a little contemplation soon convinces one that this is not the case. John Bernoulli explicitly warned his readers against such a supposition when he formally proposed the brachistochrone problem in 1696. The surmise, suggested by Galileo's remarks on the brachistochrone problem, that the curve of quickest descent is an arc of a circle, is a more reasonable one, since there seems intuitively some justification for thinking that steepness and high velocity at the beginning of a fall will conduce to shortness in the time of descent over the whole path. It turns out, however, that this characteristic can also be overdone; the precise degree of steepness required at the start can in fact only be determined by a suitable mathematical investigation.   A cycloid generated by a rolling wheel.   A cycloid generated by a rolling wheel.    The first step which will be undertaken in the discussion of the problem in the following pages is the proof that a brachistochrone curve joining two given points must be a cycloid. We are familiar with the cycloid as the arched locus of a point on the rim of a wheel which rolls on a horizontal line, as shown in . It turns out that the brachistochrone must consist of a portion of one of the arches turned upside down, and the line on the under side of which the circle rolls must be located at just the proper height above the given initial point of fall.  When these facts have been established we are at once faced by the problem of determining whether or not such a cycloid exists joining two arbitrarily given points. Fortunately a modification by Schwarz (1845-1923) of a method due to the Bernoulli brothers will enable us to prove that two points can always be joined by one and but one cycloid of the type desired.  When these results had been attained the eighteenth-century student was content with his progress, but we cannot be so easily satisfied because we know that in other problems of the calculus of variations further conditions on the minimizing arc are required which are quite different in character from those which have so far been described. Our doubts for this particular problem will be removed, however, by a so-called sufficiency proof which will definitely establish the fact that the time of descent from a given point 1 to a given point 2 on a suitably chosen cycloid is shorter than that on every other curve joining those two points. The method used is again that of Weierstrass, a special case of which we have already considered in of the last chapter. The argument there given and the one which we shall see in the case of the brachistochrone are excellent illustrations of the type of proof which is effective for more general problems of the calculus of variations.  "
},
{
  "id": "fig-11",
  "level": "2",
  "url": "sec-brachistochrone-overview.html#fig-11",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " A cycloid generated by a rolling wheel.   A cycloid generated by a rolling wheel.   "
},
{
  "id": "sec-analytic-formulation",
  "level": "1",
  "url": "sec-analytic-formulation.html",
  "type": "Section",
  "number": "3.2",
  "title": "The analytic formulation of the problem",
  "body": " The analytic formulation of the problem  In order to discuss intelligently the problem of the brachistochrone we should first deduce for ourselves the integral which represents the time required by a particle to fall under the action of gravity down an arbitrarily chosen curve joining two fixed points 1 and 2. It is agreed that the initial velocity at the point 1 is given in advance, and that the particle is to fall without friction on the curve and without resistance in the surrounding medium. If the effects of friction or a resisting medium are to be taken into account the brachistochrone problem becomes a much more complicated one.   I'm hiding the diagram included in the textbook under a little foldy thing. I encourage you to draw your own diagram first, based on the instructions in the next paragraph, and then compare your diagram to the one in the book. (This will actually help you make sense of the book's diagram when you see it, because there's some things that aren't super clear.) Label the following:   the curve of descent connecting point 1 and point 2;    a moving particle on the curve ;    the distance that the point has actually traveled so far;    a tangent line to the curve at the point ;    the vertical and horizontal components of that tangent line;    the angle between the horizontal and the tangent line; and    the downward force of gravity .        Diagram of a point moving along a curve under the force of gravity.      Let be the mass of the moving particle in and the distance through which it has fallen from the point 1 along the curve of descent in the time . In order to make our analysis more convenient we may take the positive -axis vertically downward, as shown in the figure. I always think this is hilarious for some reason. I think I'll try defying gravity!   The vertical force of gravity acting upon is the product of the mass by the gravitational acceleration , and the only force acting upon in the direction of the tangent line to the curve is the projection of this vertical gravitational force upon that line. But the force along the tangent may also be computed as the product of the mass of the particle by its acceleration along the curve. Equating these two values we find the equation in which a common factor has been discarded and use has been made of the well-known calculus formula .   That's not a well-known formula to me! Draw yourself a little triangle with angle and sides and . Use this to conclude in the limit.   To integrate this equation we follow a customary procedure and multiply each side by . The antiderivatives of the two sides are then easily found,   This is honestly just rude because these antiderivatives do take a little work.    Start by writing down the two sides of this equation: Multiply both sides by .    On the RHS, use the chain rule to simplify . Then integrate with respect to .    On the LHS, some more work is necessary. What does mean in physical terms? How about ? Replace these two things with letters better representing their physical meaning.    means velocity, and means acceleration.     Integrate the LHS with respect to . You'll need to do a -substitution. What's a smart choice for ?    If I choose , then , so the integral becomes       and since they can differ only by a constant we have The value of the constant can be determined if we remember that the values of and at the initial point 1 at the fall are and , respectively, so that for the last equation gives With the help of the value of from this equation, and the notation equation becomes An integration now gives the following result which we have been seeking:    The time required by a particle starting with the initial velocity to fall from a point 1 to a point 2 along a curve is given by the integrals      It's worth pointing out that this is also a functional, because the value of this integral depends on the function (or parametrically-defined curve) you're using to connect point 1 to point 2.   It is clear that an arc which minimizes one of the integrals expressing will also minimize that integral when the factor is omitted, and vice versa. Let us therefore use the notations for our integral which we seek to minimize and its integrand. Since the value of the function is infinite when and imaginary when we must confine our curves to the portion of the plane which lies below the line in . This is not really a restriction of the problem since the equation deduced above shows that a particle started on a curve with the velocity at the point 1 will always come to rest if it reaches the altitude on the curve, and it can never rise above that altitude. For the present we shall restrict our curves to lie in the half-plane . In a later section of this chapter we shall see what happens when curves are permitted which have points in common with the line .   Be careful here to remember that we've set up our axes such that the positive -axis points down .   In our study of the shortest-distance problems in the last chapter the arcs to be considered were taken in the form with continuous on the interval , and the interval could furthermore be subdivided into parts on each of which the derivative is continuous. An admissible arc for the brachistochrone problem will always be understood to have these properties besides the additional one that it lies entirely in the half-plane . For an admissible function, however, we retain always the definition given in . Our problem is then to find among the admissible arcs joining the points 1 and 2, one which minimizes the integral .  "
},
{
  "id": "sec-analytic-formulation-3",
  "level": "2",
  "url": "sec-analytic-formulation.html#sec-analytic-formulation-3",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": " I'm hiding the diagram included in the textbook under a little foldy thing. I encourage you to draw your own diagram first, based on the instructions in the next paragraph, and then compare your diagram to the one in the book. (This will actually help you make sense of the book's diagram when you see it, because there's some things that aren't super clear.) Label the following:   the curve of descent connecting point 1 and point 2;    a moving particle on the curve ;    the distance that the point has actually traveled so far;    a tangent line to the curve at the point ;    the vertical and horizontal components of that tangent line;    the angle between the horizontal and the tangent line; and    the downward force of gravity .        Diagram of a point moving along a curve under the force of gravity.     "
},
{
  "id": "sec-analytic-formulation-6",
  "level": "2",
  "url": "sec-analytic-formulation.html#sec-analytic-formulation-6",
  "type": "Activity",
  "number": "3.2.2",
  "title": "",
  "body": " That's not a well-known formula to me! Draw yourself a little triangle with angle and sides and . Use this to conclude in the limit.  "
},
{
  "id": "sec-analytic-formulation-8",
  "level": "2",
  "url": "sec-analytic-formulation.html#sec-analytic-formulation-8",
  "type": "Activity",
  "number": "3.2.3",
  "title": "",
  "body": " This is honestly just rude because these antiderivatives do take a little work.    Start by writing down the two sides of this equation: Multiply both sides by .    On the RHS, use the chain rule to simplify . Then integrate with respect to .    On the LHS, some more work is necessary. What does mean in physical terms? How about ? Replace these two things with letters better representing their physical meaning.    means velocity, and means acceleration.     Integrate the LHS with respect to . You'll need to do a -substitution. What's a smart choice for ?    If I choose , then , so the integral becomes      "
},
{
  "id": "thm-brachistochrone-time",
  "level": "2",
  "url": "sec-analytic-formulation.html#thm-brachistochrone-time",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "",
  "body": "  The time required by a particle starting with the initial velocity to fall from a point 1 to a point 2 along a curve is given by the integrals    "
},
{
  "id": "sec-analytic-formulation-11",
  "level": "2",
  "url": "sec-analytic-formulation.html#sec-analytic-formulation-11",
  "type": "Remark",
  "number": "3.2.3",
  "title": "",
  "body": " It's worth pointing out that this is also a functional, because the value of this integral depends on the function (or parametrically-defined curve) you're using to connect point 1 to point 2.  "
},
{
  "id": "sec-analytic-formulation-13",
  "level": "2",
  "url": "sec-analytic-formulation.html#sec-analytic-formulation-13",
  "type": "Remark",
  "number": "3.2.4",
  "title": "",
  "body": " Be careful here to remember that we've set up our axes such that the positive -axis points down .  "
},
{
  "id": "sec-first-necessary-3",
  "level": "1",
  "url": "sec-first-necessary-3.html",
  "type": "Section",
  "number": "3.3",
  "title": "A first necessary condition",
  "body": " A first necessary condition  As in our study of the problems of determining shortest distances let us suppose that a particular admissible arc with the equation actually furnishes a minimum for the integral , and let us then seek to determine its properties. If is an admissible function having then the family of arcs contains for the parameter value , and for small values of consists entirely of admissible arcs passing through the points 1 and 2. We must not let be too large, as otherwise the corresponding curve of the family might lie partly above the line .  Among the values of the integral along the arcs of the family the particular value , which is the value along , must be a minimum, and we have therefore the necessary condition .   This is about to be a lot like what we did in .   How is equation similar to equation ? How is it different?    We'll need to use the Leibniz rule like we did in , but this time, we need to use the multivariable chain rule . Draw a tree diagram representing the intermediate relationships between and .    Use your tree diagram, and the chain rule ideas from steps 3, 4, and 5 in , to compute .    Conclude by writing down a final expression for .      The value of the derivative found by differentiating equation with respect to and then setting , is where and are the partial derivatives of with the arguments belonging to the minimizing arc .   There's two ways to achieve the next important result. The book suggests one way, and I'll suggest another. The subscripts here are going to get a little hairy, so I suggest rewriting in Leibniz notation:     Rewrite as the sum of two integrals. The second one, involving , is a natural candidate for integration by parts. Do that, then combine the two integrals again; you should now be able to factor out an .         We know , no matter which variation you choose, so that means we can invoke the corollary to that we proved in . What can you conclude?    Another way you could rewrite -- and the way the book does it -- is by messing with the first integral. Pretend it's not a definite integral for a hot second, and just use integration by parts to come up with an antiderivative. (Hint: Let , and write down some reasonable thing for the antiderivative of , even though you don't know exactly what it is.)    Take the thing you found for the first integral and differentiate it with respect to  .     If we make use of the easily derived formula and the fact that , the expression takes the form This must vanish for every family of the form , i.e., for every admissible function having , and we find ourselves again in a position to make use of the fundamental lemma of . From that lemma it follows that:    For every minimizing arc there must exist a constant such that the equation holds at every point of On each sub-arc of where the tangent turns continuously we must have     The last equation may be readily deduced from equation by differentiation, since on a sub-arc of where the tangent turns continuously the function is continuous and the integral in has the derivative .  The equation is the famous differential equation deduced by Euler in 1744 and called after him Euler's differential equation . Its solutions have been named extremals because they are the only curves which can give the integral a maximum or a minimum, i.e., an extreme value. We shall in the following pages apply the term extremal only to those solutions which have continuously turning tangents and continuous second derivatives . In more modern language, we're going to insist that is a function of class .    Most authors write Euler's equation, also sometimes called the Euler-Lagrange equation , in a slightly different form. Assuming that (that is, is continuous):  Note well that the function in this differential equation is in fact the integrand of whatever functional we're currently looking at (see the very general form from ). For instance, in the arc length problem, the functional is so that .    UPDATED DIRECTIONS  The Euler-Lagrange equation involves differentiating with respect to . Let's assume that we can take as many derivatives as we need -- in particular, let's assume that -- and compute this derivative to see if something simpler happens in the particular case where the integrand is of the form .    Suppose you have some function where and are functions of . Draw a tree diagram representing the relationships between , , , and .    Use the multivariable chain rule to write down an expression for .    In our case, -- or, in Leibniz notation, -- is really just a function of and , so it can play the role of in the previous step. To help you understand what the book says in the next paragraph, use your result to write down an expression for .    Compute . Use the chain rule to write out . Contrary to how the book is going to do it in the next paragraph, don't write out  ! Simplify a little; you should in particular be able to factor out .     (New step) Apply the Euler-Lagrange equation to your result. What can you conclude about ?     See .    We have not so far made any assumption concerning the existence of a second derivative along our minimizing arc. When there is one, however, we can carry out the differentiations indicated in equation and obtain from which it follows that along a minimizing arc with a second derivative we have and hence also    For me, these equations are hard to read in the subscript notation. Here they are in Leibniz notation instead, with some more parentheses added for clarity. Here's the second one: And since the only thing whose derivative is zero is a constant function, The last equation here is called the Beltrami identity ; it's a special case of the Euler-Lagrange equation. Note well that these equations only work when doesn't appear in the integrand of the functional -- that is, when the integrand is of the form .   The reasoning by means of which equation has been derived is valid not only for the particular integrand function of the brachistochrone problem but also for an arbitrary function of the two variables and which with its derivatives has suitable continuity properties. One can further verify readily that the proofs of equations and hold without alteration not only for this case but also for the still more general integral to be studied in Chapter V for which the integrand is assumed to be a function of the three variables . It is evident, therefore, that the results of this section have great generality and that they may be applied to a wide variety of problems in the calculus of variations. One should note that equation cannot be expected to hold when occurs in the integrand function, since in the differentiations made to obtain it the function was supposed to contain only the variables and .   The fun thing about special cases is that things are generally way simpler. Let's see how this works in the case of minimizing arc length, which we considered using other methods in .   Apply Euler's equation to the arc length integrand :   Compute .    Compute .    Compute . (Yikes!)    Combine the pieces appropriately.       Now try the Beltrami identity . You've already computed all the pieces you need.       Assuming (which is true for reasons we'll get to in the next section), we can apply the Beltrami identity to the brachistochrone problem, since doesn't appear in the integrand. We could also apply the Euler formula directly but it gets real messy, so we may as well use our nicer version. Try it out if you don't believe me; the issue is that has like three different terms in it.    Write down .    Compute .    Assemble the pieces to produce a differential equation that the brachistochrone curve must satisfy. (If you get a common denominator, you can simplify a little.)    After getting a common denominator, this can be simplified to        "
},
{
  "id": "activity-y-yprime",
  "level": "2",
  "url": "sec-first-necessary-3.html#activity-y-yprime",
  "type": "Activity",
  "number": "3.3.1",
  "title": "",
  "body": " This is about to be a lot like what we did in .   How is equation similar to equation ? How is it different?    We'll need to use the Leibniz rule like we did in , but this time, we need to use the multivariable chain rule . Draw a tree diagram representing the intermediate relationships between and .    Use your tree diagram, and the chain rule ideas from steps 3, 4, and 5 in , to compute .    Conclude by writing down a final expression for .     "
},
{
  "id": "sec-first-necessary-3-6",
  "level": "2",
  "url": "sec-first-necessary-3.html#sec-first-necessary-3-6",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": " There's two ways to achieve the next important result. The book suggests one way, and I'll suggest another. The subscripts here are going to get a little hairy, so I suggest rewriting in Leibniz notation:     Rewrite as the sum of two integrals. The second one, involving , is a natural candidate for integration by parts. Do that, then combine the two integrals again; you should now be able to factor out an .         We know , no matter which variation you choose, so that means we can invoke the corollary to that we proved in . What can you conclude?    Another way you could rewrite -- and the way the book does it -- is by messing with the first integral. Pretend it's not a definite integral for a hot second, and just use integration by parts to come up with an antiderivative. (Hint: Let , and write down some reasonable thing for the antiderivative of , even though you don't know exactly what it is.)    Take the thing you found for the first integral and differentiate it with respect to  .    "
},
{
  "id": "thm-euler",
  "level": "2",
  "url": "sec-first-necessary-3.html#thm-euler",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "",
  "body": "  For every minimizing arc there must exist a constant such that the equation holds at every point of On each sub-arc of where the tangent turns continuously we must have    "
},
{
  "id": "sec-first-necessary-3-10",
  "level": "2",
  "url": "sec-first-necessary-3.html#sec-first-necessary-3-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler's differential equation extremals "
},
{
  "id": "remark-euler",
  "level": "2",
  "url": "sec-first-necessary-3.html#remark-euler",
  "type": "Remark",
  "number": "3.3.2",
  "title": "",
  "body": " Most authors write Euler's equation, also sometimes called the Euler-Lagrange equation , in a slightly different form. Assuming that (that is, is continuous):  Note well that the function in this differential equation is in fact the integrand of whatever functional we're currently looking at (see the very general form from ). For instance, in the arc length problem, the functional is so that .  "
},
{
  "id": "activity-euler-beltrami",
  "level": "2",
  "url": "sec-first-necessary-3.html#activity-euler-beltrami",
  "type": "Activity",
  "number": "3.3.3",
  "title": "UPDATED DIRECTIONS.",
  "body": " UPDATED DIRECTIONS  The Euler-Lagrange equation involves differentiating with respect to . Let's assume that we can take as many derivatives as we need -- in particular, let's assume that -- and compute this derivative to see if something simpler happens in the particular case where the integrand is of the form .    Suppose you have some function where and are functions of . Draw a tree diagram representing the relationships between , , , and .    Use the multivariable chain rule to write down an expression for .    In our case, -- or, in Leibniz notation, -- is really just a function of and , so it can play the role of in the previous step. To help you understand what the book says in the next paragraph, use your result to write down an expression for .    Compute . Use the chain rule to write out . Contrary to how the book is going to do it in the next paragraph, don't write out  ! Simplify a little; you should in particular be able to factor out .     (New step) Apply the Euler-Lagrange equation to your result. What can you conclude about ?     See .   "
},
{
  "id": "remark-beltrami",
  "level": "2",
  "url": "sec-first-necessary-3.html#remark-beltrami",
  "type": "Remark",
  "number": "3.3.3",
  "title": "",
  "body": " For me, these equations are hard to read in the subscript notation. Here they are in Leibniz notation instead, with some more parentheses added for clarity. Here's the second one: And since the only thing whose derivative is zero is a constant function, The last equation here is called the Beltrami identity ; it's a special case of the Euler-Lagrange equation. Note well that these equations only work when doesn't appear in the integrand of the functional -- that is, when the integrand is of the form .  "
},
{
  "id": "activity-beltrami-arclength",
  "level": "2",
  "url": "sec-first-necessary-3.html#activity-beltrami-arclength",
  "type": "Activity",
  "number": "3.3.4",
  "title": "",
  "body": " The fun thing about special cases is that things are generally way simpler. Let's see how this works in the case of minimizing arc length, which we considered using other methods in .   Apply Euler's equation to the arc length integrand :   Compute .    Compute .    Compute . (Yikes!)    Combine the pieces appropriately.       Now try the Beltrami identity . You've already computed all the pieces you need.     "
},
{
  "id": "activity-euler-brachistochrone",
  "level": "2",
  "url": "sec-first-necessary-3.html#activity-euler-brachistochrone",
  "type": "Activity",
  "number": "3.3.5",
  "title": "",
  "body": " Assuming (which is true for reasons we'll get to in the next section), we can apply the Beltrami identity to the brachistochrone problem, since doesn't appear in the integrand. We could also apply the Euler formula directly but it gets real messy, so we may as well use our nicer version. Try it out if you don't believe me; the issue is that has like three different terms in it.    Write down .    Compute .    Assemble the pieces to produce a differential equation that the brachistochrone curve must satisfy. (If you get a common denominator, you can simplify a little.)    After getting a common denominator, this can be simplified to       "
},
{
  "id": "sec-application-brachistochrone",
  "level": "1",
  "url": "sec-application-brachistochrone.html",
  "type": "Section",
  "number": "3.4",
  "title": "Application to the brachistochrone problem",
  "body": " Application to the brachistochrone problem  For the special case of the brachistochrone problem the integrand and its partial derivatives are readily found to be and the condition of the preceding section, which must hold along every minimizing arc , can therefore be expressed in the form The second member of this equation, which we may denote by , is a continuous function of since both and the integral in it are continuous along . By solving the equation for we find that is also continuous. Turning again to the next to last equation with this result we see now that the second member of that equation has also a continuous derivative, since when is continuous and has a continuous derivative the same is true of both and the integral occurring in it. Hence in the last equation must have a continuous derivative and we find the following result:   For the brachistochrone problem a minimizing arc lying entirely below the line can have no corners and must have continuous curvature. Analytically stated, this means that the derivatives , exist and are continuous along .   In other words, .  Since we now know that the second derivative exists along the minimizing arc we can be sure that the equation deduced in the preceding section also holds along it. When the values of and its derivative for the brachistochrone problem are substituted from this equation becomes the value of the constant being chosen for convenience in the form .   The next paragraph is going to perform several dirty tricks. I wrote a little blog post about why they make sense.   The curves which satisfy the differential equation may be found in the customary manner by solving the equation for and separating the variables, but we shall find them more easily if we profit by the experience of others and introduce a new variable defined by the equation From the differential equation it follows then, with the help of some simple trigonometry, that along a minimizing arc we must have where the last equation is found from the next to last by an integration and is the new constant so introduced. It will be shown in the next section that curves which satisfy the first and third of these equations are the cycloids described in the following theorem:    A curve down which a particle, started with the initial velocity at the point 1, will fall in the shortest time to a second point 2 is necessarily an arc having equations of the form These represent the locus of a point fixed on the circumference of a circle of radius as the circle rolls on the lower side of the line Such a curve is called a cycloid .    "
},
{
  "id": "sec-application-brachistochrone-6",
  "level": "2",
  "url": "sec-application-brachistochrone.html#sec-application-brachistochrone-6",
  "type": "Remark",
  "number": "3.4.1",
  "title": "",
  "body": " The next paragraph is going to perform several dirty tricks. I wrote a little blog post about why they make sense.  "
},
{
  "id": "thm-cycloid",
  "level": "2",
  "url": "sec-application-brachistochrone.html#thm-cycloid",
  "type": "Theorem",
  "number": "3.4.2",
  "title": "",
  "body": "  A curve down which a particle, started with the initial velocity at the point 1, will fall in the shortest time to a second point 2 is necessarily an arc having equations of the form These represent the locus of a point fixed on the circumference of a circle of radius as the circle rolls on the lower side of the line Such a curve is called a cycloid .   "
},
{
  "id": "sec-cycloids",
  "level": "1",
  "url": "sec-cycloids.html",
  "type": "Section",
  "number": "3.5",
  "title": "Cycloids",
  "body": " Cycloids  The fact that the equations represent a cycloid of the kind described in the theorem is easily proved. For let a circle of radius begin to roll on the line at the point whose co-ordinates are , as shown in . After a turn through an angle of radians the point of tangency is at a distance from , and the point which was the lowest in the circle has rotated to the point . The values of and may now be readily calculated in terms of from the figure, and they are found to be those given by equations .   A cycloid centered at .     The fact that the curve of quickest descent must be a cycloid is the famous result discovered by James and John Bernoulli in 1697 and announced at approximately the same time by a number of other mathematicians. The cycloid and its remarkable properties had been the subject of much study in the seventeenth century. Huygens (1629-95) in particular had shown that the evolute of a cycloid shown in is a second cycloid of exactly the same size situated in the position which is dotted in the figure, and further that the time of descent of a particle starting at rest at the point and falling along the cycloid to the lowest point is the same no matter what the position of the starting-point on the cycloid arc may be. We know from the string property of an evolute, proved on page 32 of the last chapter, that if a pendulum of length is so suspended at that the string is compelled to wrap itself around the dotted evolute, then the pendulum bob will oscillate on an arc of the cycloid. From the isochronous property of Huygens it follows that the period of oscillation will be the same no matter how great or how small the amplitude of the oscillation from to may be. This has been considered a very important discovery for the clockmaker, though one rarely finds apparatus on his mantel which is built upon this principle.   A cycloid and its evolute.     These and other properties of the cycloid were well known before the end of the seventeenth century. That the cycloid should also be the solution of the brachistochrone problem was regarded with wonder and admiration by the Bernoulli brothers. Somewhat freely translated the comment of John was \"With justice we admire Huygens because he first discovered that a heavy particle falls on a cycloid in the same time always, no matter what the starting-point may be. But you will be petrified with astonishment when I say that exactly this same cycloid, the tautochrone of Huygens, is the brachistochrone which we are seeking.\" And with rhetorically sustained enthusiasm James remarks \"Thus for this curve, which has been investigated by so many mathematicians that apparently nothing further concerning it could remain to be discovered, we find a new property, as it were an indication of its desire that no obligation might be incurred to future centuries but that it might attain the pinnacle of perfection at the end of the present one at whose beginning its birth was celebrated and among whose researches there have fallen to its lot the discovery of all of its mensurable properties and many other beautiful characteristics.\"  At the present time our mathematics is usually less emotionally expressed, but in thought at least we can share the pleasure of the brothers in their interesting discovery. It is clear when we think intuitively about the brachistochrone, that the straight line could hardly have been expected to be the curve of quickest descent because it is evident that a particle should fall more rapidly on a curve which begins more steeply and imparts a higher velocity at the beginning of the fall. But just what degree of initial steepness is desirable in order to avoid too gradual a slope near the end of the fall could hardly have been foreseen. Hi!  "
},
{
  "id": "fig-3-13",
  "level": "2",
  "url": "sec-cycloids.html#fig-3-13",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": "  A cycloid centered at .   "
},
{
  "id": "fig-3-14",
  "level": "2",
  "url": "sec-cycloids.html#fig-3-14",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": "  A cycloid and its evolute.   "
},
{
  "id": "sec-preliminary-remarks",
  "level": "1",
  "url": "sec-preliminary-remarks.html",
  "type": "Section",
  "number": "4.1",
  "title": "Preliminary remarks concerning the problem",
  "body": " Preliminary remarks concerning the problem  The problem of determining a surface of revolution of minimum area, like the brachistochrone problem, was one of the earliest considered by students of the calculus of variations, and it is one of those which have been most thoroughly studied. It is in many respects the most satisfactory illustration which we have of the principles of the general theory of the calculus of variations in the plane. In spite of the fact that it was proposed early in the seventeenth century and has been restudied at frequent intervals since that time, one finds nevertheless that new results of interest and importance concerning it have been found in very recent years.  In the following pages it will be shown first of all that a plane curve which joins two given points and generates by rotation about the -axis a surface of revolution of minimum area, must be an arc of a catenary with an equation of the form   Fractions in exponents get really tiny and really hard to read. Using the alternative notation , this is easier to comprehend:   The shape of one of these catenaries is shown in , but they vary considerably in appearance. One can realize these differences experimentally by hanging a chain on two pegs. When the pegs are near together the chain hangs in a catenary which is narrow and vertical, and when the pegs are far apart the curve is broad and flat. The curve in the figure is of an intermediate type.    A catenary curve.     One can also realize these differences virtually by playing with sliders in Desmos , an excellent free online graphing software.   In Desmos, enter f(x) = b\/2 (exp((x-a)\/b)+exp(-(x-a)\/b)) ; you will be prompted to add sliders for and . Do so. Set the lower limit for the slider for by clicking on the at the left edge of the slider, then typing in instead.    Describe how changing the value of impacts the graph of the catenary.    Describe how changing the value of impacts the graph of the catenary.   You can also use this pre-prepared worksheet .   If it is admitted that when two points 1 and 2 in the plane are given, a minimizing curve of the form joining them must be one of the catenaries , then it devolves upon us at once to find out if the two points can be joined by such a curve. The analytical discussion of this problem involves computations which will be indicated in a later section, but if we are willing to forego proofs for the moment it will be easy to describe the results geometrically. In the two-parameter family of catenaries those which pass through the point 1 form a one-parameter family of curves such that one of them passes through 1 in every direction, and this one-parameter family has an envelope as shown in . It will be proved, as may also easily be inferred intuitively from the figure, that when the initial slope of the catenary at 1 is made to increase from minus infinity to plus infinity the intersection of the catenary with the ordinate through 2 first descends from infinity to the point 3 and then ascends to infinity again. When the intersection reaches a point 2 above the envelope on its downward journey it belongs to a catenary arc which touches between 1 and 2, and when it reaches 2 going upward it belongs to a catenary having no such contact point. We see readily then that every point 2 above the envelope G is joined to 1 by two catenaries of the family only one of which touches the envelope ; a point 2 on has only one catenary joining it to 1; and a point 2 below has none. This is a situation very different from the corresponding one for the brachistochrone problem, where there was always a unique cycloid joining two given points, and it is one of the reasons why the catenary problem is so much more typical of the results which may in general be expected for problems of the calculus of variations in the plane.    A family of catenary curves and their envelope G.    The point 3 where one of the catenaries touches the envelope , in , is called the point conjugate to 1 on . We shall see in a later section that if 4 is a second such contact point on the envelope , as shown in the figure, then the surface of revolution generated by the composite arc is always equal to that generated by . This is a very interesting analogue of the string property of the evolute of a curve, and is another instance of the envelope theorem which was justified by Darboux, Zermelo, and Kneser. By means of it we shall be able to prove Jacobi's necessary condition which says that a catenary arc having on it a point 3 conjugate to 1 can never furnish a surface of revolution of minimum area. As we have hitherto seen, the problems of the two preceding chapters required no application of Jacobi's necessary condition for the case when the two end-points of the minimizing curve were given in advance. It was for this case, however, that Jacobi originally stated his remarkable condition which distinguishes the calculus of variations in such a striking way from the ordinary theory of maxima and minima of functions of one or more variables.  After seeing that one of the catenaries joining 1 with 2 can never be a solution of our problem, it becomes a matter of some importance to be able to prove that the remaining one, , does furnish a minimum of some sort. This will be done by the method of Weierstrass which has already been explained for the problems of the preceding chapter. There is always a neighborhood of in which all other arcs joining 1 with 2 generate larger surfaces of revolution than that generated by itself.  The results which have so far been described evidently leave us in some doubt as to what happens when the point 2 lies on or below the envelope . When 2 is on , Jacobi's condition says that the unique catenary arc joining 1 with 2 cannot possibly furnish a minimum surface of revolution, and when 2 is below there is no catenary of the family whatsoever joining 1 with 2. When 2 is on or below there is in fact no curve represented by an equation of the form which generates a minimum surface of revolution. We shall see that the minimum surface is in this case furnished by the broken line consisting of the two ordinates of the points 1 and 2 and the segment of the -axis between them. It is called the Goldschmidt discontinuous solution of the problem, after the man who first discovered it in 1831, discontinuous because its tangent turns discontinuously at its two corners on the -axis.  It will be proved that the Goldschmidt discontinuous solution, like the minimizing catenary described above, always generates a smaller surface of revolution than those generated by other curves joining its end-points and lying in a sufficiently small neighborhood of it. When the point 2 is above the envelope both the catenary solution and the discontinuous solution are present, and Dr. H. F. MacNeish showed in 1905 how one may distinguish the one of them which generates the smaller surface. Professor Mary E. Sinclair has proved that the smaller one is also smaller than the surfaces of revolution generated by all other curves of a very general type joining the points 1 and 2. The methods of proving these statements in the following pages are somewhat different from the ones used by these writers, but the results established are identical with theirs.  "
},
{
  "id": "remark-exp",
  "level": "2",
  "url": "sec-preliminary-remarks.html#remark-exp",
  "type": "Remark",
  "number": "4.1.1",
  "title": "",
  "body": " Fractions in exponents get really tiny and really hard to read. Using the alternative notation , this is easier to comprehend:   "
},
{
  "id": "fig-4-24",
  "level": "2",
  "url": "sec-preliminary-remarks.html#fig-4-24",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": "  A catenary curve.   "
},
{
  "id": "activity-explore-catenary",
  "level": "2",
  "url": "sec-preliminary-remarks.html#activity-explore-catenary",
  "type": "Activity",
  "number": "4.1.1",
  "title": "",
  "body": " One can also realize these differences virtually by playing with sliders in Desmos , an excellent free online graphing software.   In Desmos, enter f(x) = b\/2 (exp((x-a)\/b)+exp(-(x-a)\/b)) ; you will be prompted to add sliders for and . Do so. Set the lower limit for the slider for by clicking on the at the left edge of the slider, then typing in instead.    Describe how changing the value of impacts the graph of the catenary.    Describe how changing the value of impacts the graph of the catenary.   You can also use this pre-prepared worksheet .  "
},
{
  "id": "fig-4-25",
  "level": "2",
  "url": "sec-preliminary-remarks.html#fig-4-25",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": "  A family of catenary curves and their envelope G.   "
},
{
  "id": "sec-proof-catenary",
  "level": "1",
  "url": "sec-proof-catenary.html",
  "type": "Section",
  "number": "4.2",
  "title": "The proof that the minimizing arc is a catenary",
  "body": " The proof that the minimizing arc is a catenary  As we have already noted in , the integral which we shall have to minimize for the problem of determining a surface of revolution of minimum area is where now has the value The curves to be studied for this problem must all lie in the upper half-plane since on an arc with portions below the -axis the value of the integral is the difference of the areas generated by the segments above and the segments below the axis, while we are wishing to consider the sum of those areas. If an arc has segments below the -axis it may always be replaced by one above the axis which will generate the same surface, as is clear from . Besides the restriction our curves we shall, as in the two preceding examples, assume that all the curves considered are continuous and have tangents which turn continuously except possibly at a finite number of corners. Let us call curves of this sort in the upper half-plane admissible curves . That is, we're assuming is piecewise .    Any portion of the curve below the x-axis may be reflected over the x-axis without changing the area of the surface of revolution.     Our problem is then to determine among all admissible arcs joining two given points 1 and 2 one which minimizes the integral .  The necessary conditions deduced in apply without alteration to our present problem. The minimizing arcs must be solutions of the equation which for the special function takes the form where is the length of the minimizing arc measured from 1 to the point whose abscissa is . At a point of the arc where this equation can be solved for , giving and we see at once that at such a point is continuous since and both have this property. But if is continuous then and both have continuous derivatives and the equation shows again that must also have a continuous derivative At all points above the -axis our minimizing arc has therefore continuous curvature and no corners.  If we know that along a minimizing arc there is a continuous derivative then as in Euler's equation has the consequence  The Beltrami identity. which for the special function takes the form  By solving this equation for and integrating we see that the solutions of Euler's equation also satisfy the two equations and it follows readily by solving the last one for that the extremals for our problem are the catenaries We use here and in the following pages the customary symbols for the hyperbolic cosine and the hyperbolic sine of defined by the equations No elaborate properties of these functions will be needed, but it will be helpful later if we notice, while these formulas are before us, that each of them has the other as its derivative.  Here I've made a deliberate break from the book's notation. In the original text, these two functions are denoted and . While these names are still occasionally found in modern literature, I find them to be really old-fashioned, so I've replaced them throughout with the much more common and .   When we know that the extremals are the catenaries of , we see at once that a minimizing arc with corners is impossible since the corners would have to be on the -axis, as has already been indicated, and the parts of the minimizing arc above the axis would have to be segments of catenaries which have no points in common with the axis. We have justified, therefore, the following conclusion:    If 1 and 2 are two points in the half-plane then an admissible arc joining them and generating a surface of revolution of minimum area must be a single arc without corners of one of the catenaries (See also .)    "
},
{
  "id": "sec-proof-catenary-2",
  "level": "2",
  "url": "sec-proof-catenary.html#sec-proof-catenary-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "admissible curves "
},
{
  "id": "remark-cosh-sinh",
  "level": "2",
  "url": "sec-proof-catenary.html#remark-cosh-sinh",
  "type": "Remark",
  "number": "4.2.2",
  "title": "",
  "body": " Here I've made a deliberate break from the book's notation. In the original text, these two functions are denoted and . While these names are still occasionally found in modern literature, I find them to be really old-fashioned, so I've replaced them throughout with the much more common and .  "
},
{
  "id": "thm-4-catenary",
  "level": "2",
  "url": "sec-proof-catenary.html#thm-4-catenary",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": "  If 1 and 2 are two points in the half-plane then an admissible arc joining them and generating a surface of revolution of minimum area must be a single arc without corners of one of the catenaries (See also .)   "
},
{
  "id": "sec-family-catenaries",
  "level": "1",
  "url": "sec-family-catenaries.html",
  "type": "Section",
  "number": "4.3",
  "title": "The one-parameter family of catenaries through a point",
  "body": " The one-parameter family of catenaries through a point  Our next step is to determine the number and the character of the catenaries which pass through the two given points 1 and 2. The plan is to find the equation of the one-parameter family of these catenaries passing through the point 1, and then to determine how many of them pass through the second point 2. The equation is the condition that the catenary shall pass through the point 1. It is satisfied, as one readily verifies, when and are expressed in terms of a new parameter in the form and the family of catenaries through the point 1 is therefore where is simply a convenient symbol for the more complicated expression preceding it.  In deducing the properties of the one-parameter family of catenaries through the point 1, we shall need the first and second derivatives with respect to and of the function defined in . Derivatives with respect to will be denoted by primes and with respect to by subscripts, while the subscript 1 will be used to designate values of at the point 1. If we remember the formulas mentioned above, we find readily the values where in calculating the last derivative hyperbolic sines and cosines have been replaced except in one instance by their values in terms of from the first three equations.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
