<template>
  <div>

    <section class="">
      <div class="mx-auto md:w-2/3">

        <div class="flex align-center items-center px-3 h-v90 relative">

          <div class="w-full">
            <brand />
          </div>
        </div>
      </div>
    </section>

    <divider-component></divider-component>


    <section-component title="Qui sommes nous ?">
      <template>
        <p>
          <strong>bluehelvett</strong> est une jeune agence de <strong>développement web</strong> située à <strong>Angoulême</strong>.
          <br>
          Nous sommes spécialisé dans la réalisation de <strong> sites internet</strong>.
          <br>
          <br>
          Notre domaine d'expertise s'étend du <strong><a href="#sites-vitrine">site vitrine</a></strong> aux <strong><a
              href="#e-commerce">sites e-commerce</a></strong>.
          <br>
          Et parce que cela ne suffit pas toujours, nous réalisons des <strong><a href="#applications-sur-mesure">applications
              sur-mesure</a></strong> spécifique à votre métier pour vous ouvrir le champ des possibles.
          <br>
          <br>
          Nous avons pour mission de vous accompagner dans la réalisation de votre projet,
          de l'étudier, de vous livrer et enfin de vous former à votre nouvel environnement.

          Et parce que les projets ne se terminent jamais vraiment, nous restons à vos côtés pour vous aider et
          valoriser votre stratégie de communication digitale.
          <br>
          <br>
          Nous sommes une agence à taille humaine, dynamique et nous aimons notre métier.
          <br>
          <br>
          <em><small>&mdash; L’équipe bluehelvett.</small></em>
        </p>
      </template>
    </section-component>



    <divider-component></divider-component>

    <section class="container mx-auto px-10 pb-5 pt-12">
      <h2 class="text-center underline">Découvrir nos offres ?</h2>
    </section>

    <section class="container mx-auto px-4">
      <div class="flex flex-wrap">

        <div class="sm:w-full md:w-1/3 px-3 py-2">
          <card-component title="Le site vitrine" img="/site-vitrine.png" showMore="/sites-vitrine">

            principalement utilisé pour créer une présence sur internet.
            <br>
            C'est le premier vecteur de communication pour parler de votre activité.
            <br>
            <br>
            Nous vous offrons des outils adaptés à vos attentes pour vous permettre la personnalisation et la gestion
            des
            contenus de votre site.

          </card-component>
        </div>
        <div class="sm:w-full md:w-1/3 px-3 py-2">
          <card-component title="Le site e-commerce" body="pour vendre au monde entier" img="/site-e-commerce.png" showMore="sites-e-commerce">

            destiné à des usages de vente en ligne.
            <br>
            Que vous possédiez un magasin et que vous souhaitiez réaliser des ventes aux travers d'un magasin
            virtuelle
            ou que vous soyez artisan bijoutier travaillant de chez vous désireux de vendre votre travail aux plus
            grand
            nombre,
            les site e-commerce sont fait pour vous !
            <br>
            <br>
            Nous mettons à votre disposition des outils de gestion et de configuration pour gérer pour votre boutique
            selon vos besoins.

          </card-component>
        </div>
        <div class="sm:w-full md:w-1/3 px-3 py-2">
          <card-component title="Le sur-mesure" body="pour votre métier" img="/site-sur-mesure.png" showMore="site-sur-mesure">

            Les sites <strong>sur-mesure</strong> sont la rolls des sites internet.
            <br>
            Entièrement personnalisables et évolutifs, ils laissent libre cours au projet les plus fous !
            <br>
            <br>
            Nous construsions ensemble votre projet

          </card-component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SectionComponent from '~/components/SectionComponent.vue'
  import DividerComponent from '~/components/DividerComponent.vue'
  import Brand from '~/components/Brand.vue'
  import CardComponent from '~/components/CardComponent.vue'
  import Sticky from 'sticky-js'

  let stickyHeader

  export default {
    components: {
      SectionComponent,
      DividerComponent,
      Brand,
      CardComponent
    },
    beforeMount() {
      stickyHeader = new Sticky('.sticky-header')
    },

    beforeDestroy() {
      stickyHeader.destroy()
    }
  }

</script>
