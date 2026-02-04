<script setup lang="ts">
const loading = ref(true)
const conduct = ref(`# Contributor Covenant: Code of Conduct

## Our Pledge

We pledge to make our community welcoming, safe, and equitable for all.

We are committed to fostering an environment that respects and promotes the
dignity, rights, and contributions of all individuals, regardless of
characteristics including race, ethnicity, caste, color, age, physical characteristics,
 neurodiversity, disability, sex or gender, gender identity or expression,
 sexual orientation, language, philosophy or religion, national or social origin,
  socio-economic position, level of education, or other status.

  The same privileges of participation are extended to everyone who participates in good faith and in accordance with this Covenant.

## Encouraged Behaviors

While acknowledging differences in social norms, we all strive to meet our
community's expectations for positive behavior. We also understand that our words
 and actions may be interpreted differently than we intend based on culture,
  background, or native language.

With these considerations in mind, we agree to behave mindfully toward each other
 and act in ways that center our shared values, including:

1. Respecting the **purpose of our community**, our activities, and our ways of gathering.
2. Engaging **kindly and honestly** with others.
3. Respecting **different viewpoints** and experiences.
4. **Taking responsibility** for our actions and contributions.
5. Gracefully giving and accepting **constructive feedback**.
6. Committing to **repairing harm** when it occurs.
7. Behaving in other ways that promote and sustain the **well-being of our community**.

## Restricted Behaviors

We agree to restrict the following behaviors in our community. Instances,
threats, and promotion of these behaviors are violations of this Code of Conduct.

1. **Harassment.** Violating explicitly expressed boundaries or engaging in
 unnecessary personal attention after any clear request to stop.
2. **Character attacks.** Making insulting, demeaning, or pejorative comments
directed at a community member or group of people.
3. **Stereotyping or discrimination.** Characterizing anyone’s personality or
 behavior on the basis of immutable identities or traits.
4. **Sexualization.** Behaving in a way that would generally be considered
 inappropriately intimate in the context or purpose of the community.
5. **Violating confidentiality**. Sharing or acting on someone's personal or
 private information without their permission.
6. **Endangerment.** Causing, encouraging, or threatening violence or other
 harm toward any person or group.
7. Behaving in other ways that **threaten the well-being** of our community.

### Other Restrictions

1. **Misleading identity.** Impersonating someone else for any reason, or
pretending to be someone else to evade enforcement actions.
2. **Failing to credit sources.** Not properly crediting the sources of content
 you contribute.
3. **Promotional materials**. Sharing marketing or other commercial content in
 a way that is outside the norms of the community.
4. **Irresponsible communication.** Failing to responsibly present content which
 includes, links or describes any other restricted behaviors.


## Reporting an Issue

Tensions can occur between community members even when they are trying their
best to collaborate. Not every conflict represents a code of conduct violation,
 and this Code of Conduct reinforces encouraged behaviors and norms that can
  help avoid conflicts and minimize harm.

When an incident does occur, it is important to report it promptly using the [Quokka Code of Conduct Issue Form](https://cryptpad.fr/form/#/2/form/view/Vfi8EMSHXAevFBlk-oFcfx2hAxUE1ao1sj2E3D2RclE/embed/).
The responses are viewable only by the Quokka team.

The team takes reports of violations seriously and will make every effort to
 respond in a timely manner. They will investigate all reports of code of conduct
  violations, reviewing messages, logs, and recordings, or interviewing
   witnesses and other participants.

   The team will keep investigation and enforcement actions as transparent as
    possible while prioritizing safety and confidentiality. In order to honor
     these values, enforcement actions are carried out in private with the
      involved parties, but communicating to the whole community may be part of
       a mutually agreed upon resolution.


## Addressing and Repairing Harm

If an investigation by the team finds that this Code of Conduct has been violated,
 the following enforcement ladder may be used to determine how best to repair harm,
  based on the incident's impact on the individuals involved and the community
  as a whole. Depending on the severity of a violation, lower rungs on the ladder may be skipped.

1) Warning

   | Attribute   | Description                                                    |
   | ----------- | -------------------------------------------------------------- |
   | Event       | A violation involving a single incident or series of incidents |
   | Consequence | A private, written warning from the team                       |
   | Repair      | Examples of repair include a private written apology, acknowledgement of responsibility, and seeking clarification on expectations |

2) Temporarily Limited Activities

   | Attribute   | Description                                                    |
   | ----------- | -------------------------------------------------------------- |
   | Event | A repeated incidence of a violation that previously resulted in a warning, or the first incidence of a more serious violation |
   | Consequence | A private, written warning with a time-limited cooldown period designed to underscore the seriousness of the situation and give the community members involved time to process the incident. The cooldown period may be limited to particular communication channels or interactions with particular community members |
   | Repair | Examples of repair may include making an apology, using the cooldown period to reflect on actions and impact, and being thoughtful about re-entering community spaces after the period is over |

3) Temporary Suspension

   | Attribute   | Description                                                    |
   | ----------- | -------------------------------------------------------------- |
   | Event | A pattern of repeated violation which the team have tried to address with warnings, or a single serious violation |
   | Consequence | A private written warning with conditions for return from suspension. In general, temporary suspensions give the person being suspended time to reflect upon their behavior and possible corrective actions |
   | Repair | Examples of repair include respecting the spirit of the suspension, meeting the specified conditions for return, and being thoughtful about how to reintegrate with the community when the suspension is lifted |

4) Permanent Ban

   | Attribute   | Description                                                    |
   | ----------- | -------------------------------------------------------------- |
   | Event | A pattern of repeated code of conduct violations that other steps on the ladder have failed to resolve, or a violation so serious that the team determine there is no way to keep the community safe with this person as a member |
   | Consequence | Access to all community spaces, tools, and communication channels is removed. In general, permanent bans should be rarely used, should have strong reasoning behind them, and should only be resorted to if working through other remedies has failed to change the behavior |
   | Repair | There is no possible repair in cases of this severity |

This enforcement ladder is intended as a guideline.
It does not limit the ability of the team to use their discretion and judgment, in keeping with the best interests of our community.


## Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public or other spaces. Examples of representing our community include using an official email address, posting via an official social media account, or acting as an appointed representative at an online or offline event.


## Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 3.0, permanently available at [https://www.contributor-covenant.org/version/3/0/](https://www.contributor-covenant.org/version/3/0/).

Contributor Covenant is stewarded by the Organization for Ethical Source and licensed under CC BY-SA 4.0. To view a copy of this license, visit [https://creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/)

For answers to common questions about Contributor Covenant, see the FAQ at [https://www.contributor-covenant.org/faq](https://www.contributor-covenant.org/faq).

Translations are provided at [https://www.contributor-covenant.org/translations](https://www.contributor-covenant.org/translations).

Additional enforcement and community guideline resources can be found at [https://www.contributor-covenant.org/resources](https://www.contributor-covenant.org/resources).

The enforcement ladder was inspired by the work of [Mozilla’s code of conduct team](https://github.com/mozilla/inclusion).
  `)

// links in new tabs

// mention issue templates - fill the provided issue template

conduct.value = conduct.value.substring(conduct.value.indexOf("\n") + 1)

// onMounted(async () => {
//   conduct.value = ""
//   try {
//     conduct.value = await $fetch('https://raw.githubusercontent.com/Faeq-F/Quokka/refs/heads/main/CODE_OF_CONDUCT.md')
//     conduct.value = conduct.value.substring(conduct.value.indexOf("\n") + 1)
//   } catch (err) {
//     console.log('Error fetching changelog data:', err.toString())
//   } finally {
//     loading.value = false
//   }
// })

import { MdPreview, type Themes, config } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import LinkAttr from 'markdown-it-link-attributes';

config({
  markdownItPlugins(plugins, { editorId }) {
    return [
      {
        type: 'linkAttr',
        plugin: LinkAttr,
        options: {
          matcher(href: string) {
            return !href.startsWith('#');
          },
          attrs: {
            target: '_blank'
          }
        }
      },
    ]
  }
})

import { useThemeHandler } from 'maz-ui'
const themeHandler = useThemeHandler({
  watchChanges: true,
})
const theme = ref(themeHandler.selectedTheme.value)
watch(themeHandler.selectedTheme, async (newTheme, _oldTheme) => theme.value = newTheme.toString())
</script>
<template>
  <div>
    <div class="text-center mt-42 varela">
      <MazAnimatedElement direction="up" :delay="200" :duration="700">
        <span class="text-6xl">Contributor Covenant: Code of Conduct</span>
      </MazAnimatedElement>
      <p class="text-gray-500 dark:text-gray-400 mt-4">
        <MazAnimatedElement direction="up" :delay="400" :duration="700"
          class="inline">Fostering
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="450" :duration="700"
          class="inline">an
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="500" :duration="700"
          class="inline">open,
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="550" :duration="700"
          class="inline">welcoming,
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="600" :duration="700"
          class="inline">and
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="650" :duration="700"
          class="inline">safe
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="700" :duration="700"
          class="inline">environment
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="750" :duration="700"
          class="inline">for
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="800" :duration="700"
          class="inline">all
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="850" :duration="700"
          class="inline">contributors
        </MazAnimatedElement>
      </p>
    </div>
    <div class="w-full px-78 mb-4 mt-16 outfit">
      <MazAnimatedElement direction="up" :delay="1050" :duration="700">
        <MazCardSpotlight class="min-h-[40vh] w-full">
          <nuxt-link
            to="https://github.com/Faeq-F/Quokka/blob/main/CODE_OF_CONDUCT.md"
            class="!no-underline flex items-center !not-italic">
            <UIcon name="i-lucide-book-open" class="mr-1.5 !size-4" />
            <code>CODE_OF_CONDUCT.md</code>
            <UIcon name="i-lucide-arrow-up-right" class="!size-2 mb-1" />
          </nuxt-link>
          <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
          <MdPreview :theme="theme as Themes" previewTheme="github"
            codeTheme="github" language="en-US" class="!bg-transparent"
            :modelValue="conduct" />
          <!-- v-if="!loading" on MdPreview-->
        </MazCardSpotlight>
      </MazAnimatedElement>
    </div>
  </div>
</template>