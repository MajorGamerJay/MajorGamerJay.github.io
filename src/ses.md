# Steam and Discord for Social Engineered Scams; An ideal example...

Recently my friend was scammed and her steam account got taken in
a clever form of social engineered[^se] scam. This was done through the
use of Discord and this was way more deep than a normal scam you
would see in any of those social media.

<p align="center">
    <a class="sectionlink" href="#About Social Engineering and about Scams">About Social Engineering and about Scams</a></br>
    <a href="#Low effort scams are a waste">Low effort scams are a waste</a></br>
    <a href="#Socially engineered scams made with high effort">Socially engineered scams made with high effort</a></br>
    <a class="sectionlink" href="#The Scam">The Scam</a></br>
    <a href="#Let&amp;#8217;s%20introduce%20the%20platforms">Let's introduce the platforms</a></br>
    <a href="#Stage 1: Conditions and preparation">Conditions and preparations</a></br>
    <a href="#Stage 2: Social engineering and tricking the user">Social engineering and tricking the user</a></br>
    <a href="#Stage 3: Acquiring targeted information">Acquiring targeted information</a></br>
    <a href="#Stage 4: Pressure into blackmail">Pressure into blackmail</a></br>
    <a href="#Stage 5: Payment or refusal?">Payment or refusal?</a></br>
    <a href="#Stage 6: Solution">Solution</a></br>
    <a class="sectionlink" href="#Damage Analysis">Damage Analysis</a></br>
    <a href="#Conclusion">Conclusion</a></br>
</p>

## About Social Engineering and about Scams

### Low effort scams are a waste

Low-effort scams are clickbaits and ways to get people to randomly
click on a link that looks appealing/attractive to the user and that
link would take the user into a journey where they would either
understand that *it's a stupid scam* or they would continue further
into the journey and give in to the scam. This is usually unlikely
because it's easy to understand and realize that it's a scam.

### Socially engineered scams made with high effort

High-effort scams are mostly cleverly designed socially engineered
tricks to make people fall for the scam without them realizing it *is*
one. It involves lots of lying, tricks, fake evidence etc. And the more
cleverly designed the scam is, the more likely the user may fall for it

Here, we will investigate and take notes from a cleverly designed scam
that was performed on a friend of mine. We will call that friend *Alice*.

## The Scam

This scam involved three platforms,

0. Discord
0. Steam
0. Emails (it will make sense later)


### Let's introduce the platforms

Skip this section if you don't know what Discord and Steam is.

0. Discord is a platform where people can chat with each other in an IRC
network like fashion but with a lot more features. The discord servers can
be compared to an IRC network with channels and discord channels are like
channels in an IRC network. A feature of Discord we will focus on is
*Connections*. *Connections* provide information about an user in other
platforms such as *Steam*, GitHub, Spotify etc. A thing I would never
recommend is to use this feature because this is a big OpSec[^opsec] risk.

0. Steam is a platform for users to play games in. It has marketplace to
sell/buy games from developers and publishers and to trade in-game items.
As a gaming platform, it does really well and provides with tons of good
sales discounts. This is why Steam is favored by gamers a lot than other
companies. For this scam, it involves tricking a person into giving away
their steam account and a steam account may be worth over thousands of
dollars because of buying games in sale and saving great amount of money.

0. Emails are something if you don't know about, I want to ask you why are
you in the internet?

### Stage 1: Conditions and preparation

A steam user has a steam *username* and a steam *alias*. Steam alias
is what a random person on the internet sees. The steam *username* on the
other hand stays private because it is used to authenticate to Steam. But by
default unless the user changes it, the steam *alias* is same as the
*steam username*. *Alice* here, forgot to change her steam alias.

Another problem about this is that Steam shows previous aliases to public
users. As *Alice* did not change his alias before, anyone could've guessed that
her current alias is her steam username.

Now, on to the main part. Let's introduce the first scammer, *Bob*.
Bob joined my Discord *server* where Alice is also in. From there,
Bob viewed *connections* of Alice and found out about her Steam account. And
from there, he found out that her Steam username and Steam alias are the same.
And so from there, they began their operation.

### Stage 2: Social engineering and tricking the user

*Bob* contacted Alice through direct message or *DM* for short. He told her that
he mistook her account for someone else and with help of all of his friends,
co-employees and others, he accidentally reported Alice's account for fraud-related
activities. Alice panicked and Bob showed screenshot of a fake e-mail from Steam
that said the reported account is now banned.

Here comes the 2nd person who played part in doing the scam with Bob, *Eve*.
In the fake email, there was a line that said if the person has any further
queries about the ban, they have to add *Eve* on Discord. After Bob seemingly
apologized for the "accidental report nuke", he told Alice to contact with *Eve*
and get this ban fixed immediately.

### Stage 3: Acquiring targeted information

Alice now panicking, added *Eve* to her friends list on Discord and through
DMs, she contacted her. Eve, being an impersonator, interrogated Alice at first
to prove to her that she's a real moderator of Steam. Alice, once completely
tricked into thinking that Eve person is legit, she started complying with what
info she demanded.

At first, Eve said that she will access Alice's Discord account to check if there
is any fraud activites done by Alice and to confirm it, she needed "special" codes
sent by her (Eve) to Alice's phone SMS to confirm that it is *her* (Alice) she's
talking with.

The first code was sent, Alice provided that code to Eve. And then the second
code was sent, Alice provided that to Eve too. This is the biggest blunder
Alice did and fell for it.

Steam uses 2-factor authentication or authentication by both password and an
external service. In case the user forgets the password, Steam will use the
external service (in this case, SMS) to get confirmation that it *is* the said
user and so they can reset the password.

*Eve* and *Bob* took advantage of this and tricked Alice into giving them a code
that lets them reset the password and access the account. By now, they have access
to the account but this is not it, here they move on to the next stage of their plan.

### Stage 4: Pressure into blackmail

After *Eve* "confirmed" that Alice was Alice and no one else, she requested her
to come to a video call. Alice still panicking about losing all of her games,
she came to the video call and showed her face. This is a major violation of OpSec
which would leave Alice vulnerable to doxxing.

And after the video call was done, Alice was told to send 300$ to the Eve's PayPal
to confirm that Alice did not do anything and Eve will return that money back to
Alice, which we obviously know, she won't.

Alice at this point, realized that this is not normal and seems fishy, she did not
agree to sending Eve the money she demanded. Eve then made it clear that this is
a scam by telling her to send the money within the next 30 minutes or she will
not unban the account. By doing this, she pressured Alice into the blackmail.

### Stage 5: Payment or refusal?

Alice was panicking and she didn't know what to do. She at first contacted my friend
and out of curiosity, I joined in their conversation to know what's happening. Then
I identified that it's a scam. At what part did Alice fail to see it's a scam? (We
can take lessons from this btw),

0. When the person showed the email about contacting the steam moderator:
    - Here, a question should arise. Why would a steam moderator handle this through
    a third party platform like discord when they could've did this through email?
0. When *Eve* requested Alice to turn on video camera.
    - In a situation like this, there is no reason for in real life verification,
    because obviously Steam has not seen the person's real life picture or info
    in any way and even if they did seen and stored info, how come *Eve*, who is
    a moderator knows how Alice looks like? Possibly, Eve cannot just simply find
    out how she looks like in the database as a moderator who is in charge of

By then, she was convinced it is a scam and she needed to find a way to get her account
back. Either she has to pay the money or she loses the account.

### Stage 6: Solution

She not getting a hold of herself because she now will lose thousands of dollars
worth of games, she started panicking like crazy and could not come to a solution.

For this situation, there is an easy solution although by that time, major damage
has been done most probably. She could contact Steam with evidence about the scam
and request them to give her back the account.

And she did exactly that. Within 3 hours, she received an email from Steam, got a
link to change her password and so she did. She regained access to her account.

## Damage Analysis

Within 30 minutes, a big scam like this gets pulled off on Alice and she had
almost lost access to her account. It took 3 hours after consultation and sending
an email to Steam to regain access to her account.

Within this small amount of time,

- Alice's in-game items traded to someone else
- Her username changed to some weird number
- Her profile picture went red
- She auto DM'd other people into getting scammed (although they didn't fell for it)

### Conclusion

Social engineering is a nasty trick but a real dangerous one and if designed
cleverly, it can destroy someone's career or do a major damage. This type of
damage was about to happen with Alice but luckily she consulted her friends
and we decided for a viable solution to all this.

A lot of people may think Alice is stupid to fall for something like this, but
when the stakes at hand are as large as this, your head may not be clear and
straight.

My advice is to stay calm, stay safe and protect your privacy. Because simple
information being public like this can result in you being targeted for a major
scam.

[^se]:
    Social Engineering is the art of manipulating people into performing
    actions or divulging confidential information, rather than by breaking in
    or using technical cracking techniques - Wikipedia

[^opsec]:
    *Operations Security* - It usually means protection of information and
    classification and preventing leakage during an operation, but now it
    generally means not letting sensitive information to be public.
